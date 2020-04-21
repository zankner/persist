// Imports:
const admin = require('firebase-admin');
const status = require('http-status');

module.exports = async (req, res) => {
  try {
    const { uid } = await admin.auth().verifyIdToken(req.headers.authorization);
    if (!uid) return res.sendStatus(status.UNAUTHORIZED);

    const orderRef = admin.firestore().collection('orders').doc(req.params.order);
    const orderDoc = await orderRef.get();
    const order = orderDoc.data();
    if (!order) return res.sendStatus(status.UNAUTHORIZED);

    const businessRef = orderDoc.data().business;
    const businessDoc = await businessRef.get();
    if (!businessDoc.data()) return res.sendStatus(status.UNAUTHORIZED);
    if (!businessDoc.data().admins.includes(uid)) return res.sendStatus(status.UNAUTHORIZED);

    delete order.clientSecret;

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