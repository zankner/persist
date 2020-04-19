// Imports:
const admin = require('firebase-admin');
const status = require('http-status');
const check = require('check-types');

module.exports = async (req, res) => {

  const {orderStatus} = req.body;

  try {
    check.assert.nonEmptyString(orderStatus);
  } catch {
    return res.sendStatus(status.BAD_REQUEST);
  }
  try {
    const { uid } = await admin.auth().verifyIdToken(req.headers.authorization);
    if (!uid) return res.sendStatus(status.UNAUTHORIZED);
    const customerRef = admin.firestore().collection('users').doc(uid);
    const customerDoc = await customerRef.get();
    if (!customerDoc.data()) return res.sendStatus(status.UNAUTHORIZED);

    const orderRef = admin.firestore().collection('orders').doc(req.params.order);
    const orderDoc = await orderRef.get();
    const order = orderDoc.data();
    if (!order) return res.sendStatus(status.UNAUTHORIZED);

    if (uid !== orderDoc.data().customer.id) return res.sendStatus(status.UNAUTHORIZED);

    if (order.businessStatus === 'declined') return res.sendStatus(status.UNAUTHORIZED);

    if (orderStatus === 'confirmed') {
      order.customerStatus = 'confirmed';
      order.status = 'confirmed';
      // Stripe and text shit here
    } else if(orderStatus === 'declined') {
      order.customerStatus = 'declined';
      order.status = 'declined';
      // Send text to user here
    } else {
      return res.sendStatus(status.UNAUTHORIZED);
    }

    await orderRef.update(order);

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