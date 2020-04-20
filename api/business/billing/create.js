// Imports:
const admin = require('firebase-admin');
const status = require('http-status');
const check = require('check-types');
const stripe = require('stripe')(process.env.TEST_STRIPE_SECRET);

module.exports = async (req, res) => {

  console.log('called');
  console.log(req);

  const stripeAccount = await stripe.oauth.token({
    grant_type: 'authorization_code',
    code: req.query.code
  });

  console.log(stripeAccount.stripe_user_id);

  // try {
  //   const { uid } = await admin.auth().verifyIdToken(req.query.state);
  //   if (!uid) return res.sendStatus(status.UNAUTHORIZED);
  //
  //   const businessRef = admin.firestore().collection('businesses').doc(req.query.state.business);
  //   const businessDoc = await businessRef.get();
  //   if (!businessDoc.data()) return res.sendStatus(status.UNAUTHORIZED);
  //   if (!businessDoc.data().admins.includes(uid)) return res.sendStatus(status.UNAUTHORIZED);
  //
  //
  //   await businessRef.update({'billing.stripeAccount': })
  //
  //   return res.send(order);
  // } catch(err) {
  //   console.log(err.message);
  //
  //   switch (err.code) {
  //     case 'auth/argument-error':
  //       return res.sendStatus(status.UNAUTHORIZED);
  //     default:
  //       return res.sendStatus(status.INTERNAL_SERVER_ERROR);
  //   }
  // }
};