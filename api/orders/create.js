// Imports:
const admin = require('firebase-admin');
const status = require('http-status');
const check = require('check-types');
const stripe = require('stripe')(process.env.TEST_STRIPE_SECRET);
const _  = require('lodash');

module.exports = async (req, res) => {
  const {business, products, dateOrdered, preferredDate} = req.body;

  try {
    check.assert.nonEmptyString(business);
    check.assert.array.of.nonEmptyString(products);
    check.assert.nonEmptyString(dateOrdered);
    check.assert.nonEmptyString(preferredDate);
  } catch {
    return res.sendStatus(status.BAD_REQUEST);
  }

  try {
    const { uid } = await admin.auth().verifyIdToken(req.headers.authorization);
    if (!uid) return res.sendStatus(status.UNAUTHORIZED);

    const customerRef = admin.firestore().collection('users').doc(uid);
    const customerDoc = await customerRef.get();
    if (!customerDoc.data()) return res.sendStatus(status.UNAUTHORIZED);

    const businessRef = admin.firestore().collection('businesses').doc(business);
    const businessDoc = await businessRef.get();
    if (!businessDoc.data()) return res.sendStatus(status.UNAUTHORIZED);
    if (!businessDoc.data().billing.stripeAccount) return res.sendStatus(status.UNAUTHORIZED);

    const productRefs = products.map(product => admin.firestore().collection('products').doc(product));

    console.log(productRefs)

    const productPrices = await Promise.all(productRefs.map(productRef => productRef.get()
      .then((productDoc) => {
        const product = productDoc.data();

        return product.price;
      }).catch(() => {
        return res.sendStatus(status.UNAUTHORIZED);
      })
    ));

    const orderTotal = _.sum(productPrices);

    const applicationFee = Math.round(.029 * (100 * orderTotal));
    const businessAmount = orderTotal * 100 - applicationFee;

    const paymentIntent = await stripe.paymentIntents.create({
      payment_method_types: ['card'],
      amount: businessAmount,
      currency: 'usd',
      application_fee_amount: applicationFee
    }, {
      stripeAccount: businessDoc.data().billing.stripeAccount
    });

    const clientSecret = paymentIntent.client_secret;

    const order = {
      business: businessRef,
      products,
      dateOrdered,
      status: 'pending',
      customerStatus: 'pending',
      businessStatus: 'pending',
      preferredDate: preferredDate,
      finalDate: '',
      customer: customerRef,
      clientSecret
    };

    const orderId = `${uid}-${Date.now()}`;
    const orderRef = admin.firestore().collection('orders').doc(orderId);
    const orderDoc = await orderRef.get();

    if (!orderDoc.data()) await orderRef.set(order);
    else return res.sendStatus(status.NOT_ACCEPTABLE);

    await customerRef.update({orders: admin.firestore.FieldValue.arrayUnion(orderRef)});
    await businessRef.update({orders: admin.firestore.FieldValue.arrayUnion(orderRef)});

    return res.send(order);
  } catch(err) {
    console.log(err.message);

    switch (err.code) {
      case 'auth/argument-error':
        return res.sendStatus(status.UNAUTHORIZED);
      default:
        return res.sendStatus(status.INTERNAL_SERVER_ERROR);
    }
  }
};