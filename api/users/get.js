// Imports:
const admin = require('firebase-admin');
const status = require('http-status');

module.exports = async (req, res) => {
  try {
    const { uid } = await admin.auth().verifyIdToken(req.headers.authorization);
    if (uid !== req.params.user) return res.sendStatus(status.UNAUTHORIZED);

    const userRef = admin.firestore().collection('users').doc(uid);
    const userDoc = await userRef.get();
    if (!userDoc.data()) return res.sendStatus(status.UNAUTHORIZED);
    return res.send(userDoc.data());
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