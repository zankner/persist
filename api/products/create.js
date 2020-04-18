// Imports:
const admin = require('firebase-admin');
const status = require('http-status');
const check = require('check-types');

module.exports = async (req, res) => {
  const {business, photos, description, title, price} = req.body;

  try {
    check.assert.nonEmptyString(business);
    check.assert.maybe.array.of.nonEmptyString(photos);
    check.assert.nonEmptyString(description);
    check.assert.nonEmptyString(title);
    check.assert.number(price);
  } catch {
    return res.sendStatus(status.BAD_REQUEST);
  }

  try {
    const { uid } = await admin.auth().verifyIdToken(req.headers.authorization);
    if (!uid) return res.sendStatus(status.UNAUTHORIZED);

    const businessRef = admin.firestore().collection('businesses').doc(business);
    const businessDoc = await businessRef.get();
    if (!businessDoc.data()) return res.sendStatus(status.UNAUTHORIZED);
    if (!businessDoc.data().admins.includes(uid)) return res.sendStatus(status.UNAUTHORIZED);

    const product = {
      business: businessRef,
      photos: photos || [],
      description,
      title,
      price,
      availability: 'available'
    };

    const productId = `${uid}-${Date.now()}`;
    const productRef = admin.firestore().collection('products').doc(productId);
    const productDoc = await productRef.get();

    if (!productDoc.data()) await productRef.set(product);
    else return res.sendStatus(status.NOT_ACCEPTABLE);

    await businessRef.update({products: admin.firestore.FieldValue.arrayUnion(productRef)});

    return res.send(product);
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