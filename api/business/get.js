// Imports:
const admin = require('firebase-admin');
const status = require('http-status');

module.exports = async (req, res) => {
  try {
    const businessRef = admin.firestore().collection('businesses').doc(req.params.business);
    const businessDoc = await businessRef.get();
    if (!businessDoc.data()) return res.sendStatus(status.UNAUTHORIZED);
    const business = businessDoc.data();

    const businessPruned = {
      email: business.email,
      name: business.name,
      address: business.address,
      number: business.number,
      products: business.products,
      logo: business.logo
    };

    return res.send(businessPruned);
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