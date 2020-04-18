// Imports:
const admin = require('firebase-admin');
const status = require('http-status');

module.exports = async (req, res) => {
  try {
    const { uid } = await admin.auth().verifyIdToken(req.headers.authorization);
    if (!uid) return res.sendStatus(status.UNAUTHORIZED);

    const productRef = admin.firestore().collection('products').doc(req.params.product);
    const productDoc = await productRef.get();
    if (!productDoc.data()) return res.sendStatus(status.UNAUTHORIZED);

    return res.send(productDoc.data());
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