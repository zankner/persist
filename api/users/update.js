// Imports:
const admin = require('firebase-admin');
const status = require('http-status');
const check = require('check-types');

module.exports = async (req, res) => {

  const {email, firstName, lastName, number, birthdate, billing,
    businesses, orders, schedule, receipts, address} = req.body;

  try {
    check.assert.maybe.nonEmptyString(email);
    check.assert.maybe.nonEmptyString(firstName);
    check.assert.maybe.nonEmptyString(lastName);
    check.assert.maybe.string(number);
    check.assert.maybe.string(birthdate);
    check.assert.maybe.string(address);
  } catch {
    return res.sendStatus(status.BAD_REQUEST);
  }

  try {
    const { uid } = await admin.auth().verifyIdToken(req.headers.authorization);
    if (uid !== req.params.user) return res.sendStatus(status.UNAUTHORIZED);

    const userRef = admin.firestore().collection('users').doc(uid);
    const userDoc = await userRef.get();
    if (!userDoc.data()) return res.sendStatus(status.UNAUTHORIZED);

    const user = {
      email,
      firstName,
      lastName,
      birthdate,
      number,
      address
    };

    await userRef.update(user);

    await admin.auth().updateUser(uid, {
      email: user.email,
      phoneNumber: user.number === '' ? null : user.number,
      displayName: `${user.firstName} ${user.lastName}`,
    });

    return res.send(user);
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