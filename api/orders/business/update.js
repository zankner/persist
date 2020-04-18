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
    const businessRef = admin.firestore().collection('businesses').doc(req.params.business);
    const businessDoc = await businessRef.get();
    if (!businessDoc.data()) return res.sendStatus(status.UNAUTHORIZED);
    if (!businessDoc.data().admins.includes(uid)) return res.sendStatus(status.UNAUTHORIZED);

    const orderRef = admin.firestore().collection('orders').doc(req.params.order);
    const orderDoc = await orderRef.get();
    if (!orderDoc.data()) return res.sendStatus(status.UNAUTHORIZED);

    if (orderDoc.data().customerStatus === 'cancelled') return res.sendStatus(status.UNAUTHORIZED);

    // Implement stripe shit here :
    if (orderStatus === 'confirmed' || orderStatus === 'declined') {
      await orderRef.update({
        businessStatus: orderStatus,
        status: orderStatus
      });
    } else {
      return res.sendStatus(status.UNAUTHORIZED);
    }

    return res.send(orderDoc.data());
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