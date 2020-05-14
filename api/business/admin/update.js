const status = require('http-status');
const admin = require('firebase-admin');
const check = require('check-types');


module.exports = async (req, res) => {
  const { status } = req.body;

  try {
    check.assert.nonEmptyString(status);
  } catch {
    return res.sendStatus(status.BAD_REQUEST);
  }

  try {
    const { uid } = await admin.auth().verifyIdToken(req.headers.authorization);
    if (!uid) return res.sendStatus(status.UNAUTHORIZED);

    const userRef = admin.firestore().collection('users').doc(uid);
    const userDoc = await userRef.get();
    if (!userDoc.data()) return res.sendStatus(status.UNAUTHORIZED);

    const businessRef = admin.firestore().collection('businesses').doc(req.params.business);
    const businessDoc = await businessRef.get();
    const business = businessDoc.data();
    if (!business) return res.sendStatus(status.UNAUTHORIZED);

    if (!business.potentialAdmins.includes(userRef)) return res.sendStatus(status.UNAUTHORIZED);

    if (status === 'confirmed') {
      await businessRef.update({
        admins: admin.firestore.FieldValue.arrayUnion(userRef),
        potentialAdmins: admin.firestore.FieldValue.arrayRemove(userRef)
      });
    } else if (status === 'declined') {
      await businessRef.update({
        potentialAdmins: admin.firestore.FieldValue.arrayRemove(userRef)
      });
    } else {
      return res.sendStatus(status.UNAUTHORIZED);
    }

    return res.sendStatus(status.OK);
  } catch (err) {
    console.log(err.message);

    switch (err.code) {
      case 'auth/argument-error':
        return res.sendStatus(status.UNAUTHORIZED);
      default:
        return res.sendStatus(status.INTERNAL_SERVER_ERROR);
    }
  }
};