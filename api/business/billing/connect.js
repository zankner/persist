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
    if (!businessDoc.data()) return res.sendStatus(status.UNAUTHORIZED);
    if (!businessDoc.data().admins.includes(uid)) return res.sendStatus(status.UNAUTHORIZED);

    const key = Math.random()
      .toString(36)
      .slice(2);

    const accountParams = {
      client_id: process.env.TEST_STRIPE_CLIENT_ID,
      state: JSON.stringify({
        key, business: req.params.business
      }),
      scope: 'read_write',
      response_type: 'code',
    };

    const stripeUrl = 'https://connect.stripe.com/express/oauth/authorize?' +  querystring.stringify(accountParams);

    res.send({stripeUrl});
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