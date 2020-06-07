// Imports:
const admin = require('firebase-admin');
const status = require('http-status');
const stripe = require('stripe')(process.env.TEST_STRIPE_SECRET);

module.exports = async (req, res) => {
  try {
    const state = JSON.parse(req.query.state);
    const { auth, business, key} = state;

    if (req.session.key !== key) {
      return res.redirect(`/business/${business}/billing?status=failed`);
    }

    const { uid } = await admin.auth().verifyIdToken(auth);
    if (!uid) return res.redirect(`/business/${business}/billing?status=failed`);

    const businessRef = admin.firestore().collection('businesses').doc(business);
    const businessDoc = await businessRef.get();
    if (!businessDoc.data()) return res.redirect(`/business/${business}/billing?status=failed`);
    if (!businessDoc.data().admins.includes(uid)) return res.redirect(`/business/${business}/billing?status=failed`);

    const stripeAccount = await stripe.oauth.token({
      grant_type: 'authorization_code',
      code: req.query.code
    });

    const accountId = stripeAccount.stripe_user_id;

    await businessRef.update({'billing.stripeAccount': accountId});

    return res.redirect(`/business/${business}/billing?status=success`);
  } catch(err) {
    console.log(err.message);

    next(err);
  }
};