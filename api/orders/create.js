// Imports:
const admin = require('firebase-admin');
const status = require('http-status');
const check = require('check-types');

module.exports = async (req, res) => {
  const {business, products, dateOrdered} = req.body;

  try {
    check.assert.nonEmptyString(business);
    check.assert.array.of.nonEmptyString(products);
    check.assert.nonEmptyString(dateOrdered);
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


    const order = {
      business: businessRef,
      products,
      dateOrdered,
      status: 'pending',
      customerStatus: 'confirmed',
      businessStatus: 'pending',
      dateFinished: '',
      customer: customerRef
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