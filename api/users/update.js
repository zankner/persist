// Imports:
const admin = require('firebase-admin');
const status = require('http-status');
const check = require('check-types');

module.exports = async (req, res) => {

  const {email, firstName, lastName, number, birthdate, billing,
    businesses, orders, schedule, receipts} = req.body;

  try {
    check.assert.nonEmptyString(email);
    check.assert.nonEmptyString(firstName);
    check.assert.nonEmptyString(lastName);
    check.assert.string(number);
    check.assert.string(birthdate);
    check.assert.object(billing);
    check.assert.array(businesses);
    check.assert.array(orders);
    check.assert.array(schedule);
    check.assert.array(receipts)
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
      billing,
      businesses,
      orders,
      schedule,
      receipts
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