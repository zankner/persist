// Imports:
const admin = require('firebase-admin');
const status = require('http-status');
const check = require('check-types');

module.exports = async (req, res) => {

  const {orderStatus, finalDate} = req.body;

  try {
    check.assert.nonEmptyString(orderStatus);
    check.assert.nonEmptyString(finalDate);
  } catch {
    return res.sendStatus(status.BAD_REQUEST);
  }
  try {
    const { uid } = await admin.auth().verifyIdToken(req.headers.authorization);
    const businessRef = admin.firestore().collection('businesses').doc(req.params.business);
    const businessDoc = await businessRef.get();
    if (!businessDoc.data()) return res.sendStatus(status.UNAUTHORIZED);
    if (!businessDoc.data().admins.includes(uid)) return res.sendStatus(status.UNAUTHORIZED);

    const orderRef = admin.firestore().collection('orders').doc(req.params.order);
    const orderDoc = await orderRef.get();
    const order = orderDoc.data();
    if (!order) return res.sendStatus(status.UNAUTHORIZED);

    if (order.customerStatus === 'declined') return res.sendStatus(status.UNAUTHORIZED);

    if (orderStatus === 'confirmed') {
      order.businessStatus = 'confirmed';
      order.finalDate = finalDate;
      // Send text to user here
    } else if(orderStatus === 'declined') {
      order.businessStatus =  'declined';
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