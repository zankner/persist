const status = require('http-status');
const admin = require('firebase-admin');
const check = require('check-types');


module.exports = async (req, res) => {
  const {photos, description, title, price} = req.body;

  try {
    check.assert.maybe.array.of.nonEmptyString(photos);
    check.assert.maybe.nonEmptyString(description);
    check.assert.maybe.nonEmptyString(title);
    check.assert.maybe.nonEmptyString(price);
  } catch {
    return res.sendStatus(status.BAD_REQUEST);
  }

  try {
    const { uid } = await admin.auth().verifyIdToken(req.headers.authorization);
    if (!uid) return res.sendStatus(status.UNAUTHORIZED);

    const productRef = admin.firestore().collection('products').doc(req.params.product);
    const productDoc = await productRef.get();
    const product = productDoc.data();
    if (!product) return res.sendStatus(status.UNAUTHORIZED);

    const businessRef = product.business;
    const businessDoc = await businessRef.get();
    if (!businessDoc.data().admins.includes(uid)) return res.sendStatus(status.UNAUTHORIZED);

    product.photos = photos || product.photos;
    product.description = description || product.description;
    product.title = title || product.title;
    product.price = price || product.price;

    await productRef.update(product);

    return res.send(product);
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