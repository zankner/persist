// Imports:
const admin = require('firebase-admin');
const status = require('http-status');
const stripe = require('stripe')(process.env.TEST_STRIPE_SECRET);
const querystring = require('querystring');

module.exports = async (req, res) => {
  try {
    const { uid } = await admin.auth().verifyIdToken(req.headers.authorization);
    if (!uid) return res.sendStatus(status.UNAUTHORIZED);

    const businessRef = admin.firestore().collection('businesses').doc(req.params.business);
    const businessDoc = await businessRef.get();
    const business = businessDoc.data()
    if (!business) return res.sendStatus(status.UNAUTHORIZED);
    if (!business.admins.includes(uid)) return res.sendStatus(status.UNAUTHORIZED);

    const dashboardLink = await stripe.accounts.createLoginLink(business.billing.stripeAccount);

    res.send({dashboardLink});
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