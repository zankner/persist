const status = require('http-status');
const admin = require('firebase-admin');
const check = require('check-types');
const _ = require('lodash');


module.exports = async (req, res) => {
  const {email, name, address, number,
    emailList, logo, potentialAdmins} = req.body;

  try {
    check.assert.maybe.nonEmptyString(email);
    check.assert.maybe.nonEmptyString(name);
    check.assert.maybe.nonEmptyString(address);
    check.assert.maybe.nonEmptyString(number);
    check.assert.maybe.nonEmptyString(logo);
    check.assert.maybe.array.of.nonEmptyString(emailList);
    check.assert.maybe.array.of.nonEmptyString(potentialAdmins);
  } catch {
    return res.sendStatus(status.BAD_REQUEST);
  }

  try {
    const { uid } = await admin.auth().verifyIdToken(req.headers.authorization);
    if (!uid) return res.sendStatus(status.UNAUTHORIZED);

    const businessRef = admin.firestore().collection('businesses').doc(req.params.business);
    const businessDoc = await businessRef.get();
    const business = businessDoc.data();
    if (!business) return res.sendStatus(status.UNAUTHORIZED);

    if (!business.admins.includes(uid)) return res.sendStatus(status.UNAUTHORIZED);

    business.email = email || business.email;
    business.name = name || business.name;
    business.address = address || business.address;
    business.number = number || business.number;
    business.logo = logo || business.logo;
    business.emailList = emailList || business.emailList;
    if (potentialAdmins) {
      business.potentialAdmins.push(potentialAdmins);
      business.potentialAdmins = _.uniq(business.potentialAdmins.flat());
    }

    await businessRef.update(business);

    return res.send(business);
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