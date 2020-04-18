// Imports:
const admin = require('firebase-admin');
const status = require('http-status');
const check = require('check-types');

module.exports = async (req, res) => {
  const {business, products, dateOrdered, dateFinished, customer} = req.body;

  try {
    check.assert.nonEmptyObject(business);
    check.assert.array.of.nonEmptyStrings(products);
    check.assert.nonEmptyString(dateOrdered);
    check.assert.nonEmptyString(status);
    check.assert.nonEmptyString(dateFinished);
    check.assert.nonEmptyObject(customer);
  } catch {
    return res.sendStatus(status.BAD_REQUEST);
  }

  try {
    const { uid } = await admin.auth().verifyIdToken(req.headers.authorization);
    if (uid !== customer.id) return res.sendStatus(status.UNAUTHORIZED);


    const customerDoc = await customer.get();
    if (!customerDoc.data()) return res.sendStatus(status.UNAUTHORIZED);

    const businessDoc = await business.get();
    if (!businessDoc.data()) return res.sendStatus(status.UNAUTHORIZED);

    const order = {
      business,
      products,
      dateOrdered,
      status: 'pending',
      customerStatus: 'confirmed',
      businessStatus: 'pending',
      dateFinished,
      customer
    };

    const orderId = `${uid}-${customer.id}-${Date.now()}`;
    const orderRef = admin.firestore().collection('order').doc(orderId);
    const orderDoc = await orderRef.get();

    if (!orderDoc.data()) await orderRef.set(order);
    else return res.sendStatus(status.NOT_ACCEPTABLE);

    await customer.update({orders: admin.firestore.FieldValue.arrayUnion(orderRef)});
    await business.update({orders: orderRef});

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