// Imports:
const admin = require('firebase-admin');
const status = require('http-status');
const check = require('check-types');

module.exports = async (req, res) => {

  const {email, firstName, lastName} = req.body;

  try {
    check.assert.nonEmptyString(email);
    check.assert.nonEmptyString(firstName);
    check.assert.nonEmptyString(lastName);
  } catch {
    return res.sendStatus(status.BAD_REQUEST);
  }

  try {
    const { uid } = await admin.auth().verifyIdToken(req.headers.authorization);
    if (!uid) return res.sendStatus(status.UNAUTHORIZED);

    const user = {
      email,
      firstName,
      lastName,
      birthdate: '',
      billing: {},
      businesses: [],
      orders: [],
      schedule: [],
      recipe: []
    };

    const userRef = admin.firestore().collection('users').doc(uid);
    const userDoc = await userRef.get();

    if (!userDoc.data()) await userRef.set(user);
    else return res.sendStatus(status.NOT_ACCEPTABLE);

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