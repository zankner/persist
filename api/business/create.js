// Imports:
const admin = require('firebase-admin');
const status = require('http-status');
const check = require('check-types');

module.exports = async (req, res) => {
  const { name, description, tax, daysOpen, photos } = req.body;

  try {
    check.assert.nonEmptyString(name);
    check.assert.nonEmptyString(description);
    check.assert.number(tax);
    check.assert.greaterOrEqual(tax, 0);
    check.assert.array.of.nonEmptyString(daysOpen);
    check.assert.array.of.nonEmptyString(photos);
    check.assert.nonEmptyArray(photos);
  } catch {
    return res.sendStatus(status.BAD_REQUEST);
  }

  try {
    const { uid } = await admin.auth().verifyIdToken(req.headers.authorization);
    if (!uid) return res.sendStatus(status.UNAUTHORIZED);

    const userRef = admin.firestore().collection('users').doc(uid);
    const userDoc = await userRef.get();
    if (!userDoc.data()) return res.sendStatus(status.UNAUTHORIZED);

    const id = `${uid}-${Date.now()}`;


    const business = {
      name,
      description,
      tax,
      daysOpen,
      photos,
      id,
      address: '',
      number: '',
      admins: [uid],
      emailList: '',
      schedule: [],
      products: [],
      receipts: [],
      logo: '',
      requests: [],
      orders: [],
      billing: {},
      potentialAdmins: []
    };

    const businessRef = admin.firestore().collection('businesses').doc(id);
    const businessDoc = await businessRef.get();

    if (!businessDoc.data()) await businessRef.set(business);
    else return res.sendStatus(status.NOT_ACCEPTABLE);

    await userRef.update({businesses: admin.firestore.FieldValue.arrayUnion(businessRef)});

    return res.send(business);
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