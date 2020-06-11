// Imports:
const admin = require('firebase-admin');
const status = require('http-status');
const check = require('check-types');

module.exports = async (req, res) => {
  const {name, description, tax, price, isSizing, sizes, photos, filePath} = req.body;

  try {
    check.assert.nonEmptyString(name);
    check.assert.nonEmptyString(description);
    check.assert.number(tax);
    check.assert.number(price);
    check.assert.boolean(isSizing);
    // check.assert.all(
    //     check.map(
    //         sizes,
    //         {
    //           size: check.nonEmptyString,
    //           available: check.boolean
    //         }
    //     )
    // );
    check.assert.array.of.nonEmptyString(photos);
    check.assert.nonEmptyString(filePath);
  } catch {
    console.log("err here");
    console.log(filePath, "file path");
    return res.sendStatus(status.BAD_REQUEST);
  }

  try {
    const { uid } = await admin.auth().verifyIdToken(req.headers.authorization);
    if (!uid) return res.sendStatus(status.UNAUTHORIZED);

    const businessRef = admin.firestore().collection('businesses').doc(req.params.business);
    const businessDoc = await businessRef.get();
    if (!businessDoc.data()) return res.sendStatus(status.UNAUTHORIZED);
    if (!businessDoc.data().admins.includes(uid)) return res.sendStatus(status.UNAUTHORIZED);

    const product = {
      business: businessRef,
      photos,
      description,
      name,
      price,
      tax,
      isSizing,
      sizes,
      filePath
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