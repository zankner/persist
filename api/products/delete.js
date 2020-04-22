const status = require('http-status');
const admin = require('firebase-admin');
const check = require('check-types');


module.exports = async (req, res) => {
  try {
    const { uid } = await admin.auth().verifyIdToken(req.headers.authorization);
    if (!uid) return res.sendStatus(status.UNAUTHORIZED);

    const productRef = admin.firestore().collection('products').doc(req.params.product);
    const productDoc = await productRef.get();
    const product = productDoc.data();
    if (!product) return res.sendStatus(status.UNAUTHORIZED);

    const businessRef = product.business;
    const businessDoc = await businessRef.get();
    const business = businessDoc.data();
    if (!business) return res.sendStatus(status.UNAUTHORIZED);
    if (!business.admins.includes(uid)) return res.sendStatus(status.UNAUTHORIZED);

    await productRef.delete();

    await businessRef.update({
      products: admin.firestore.FieldValue.arrayRemove(productRef)
    });

    return res.sendStatus(status.OK);
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