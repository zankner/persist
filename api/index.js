module.exports.users = {
  create: require('./users/create'),
  update: require('./users/update'),
  get: require('./users/get')
};

module.exports.businesses = {
  create: require('./business/create'),
  update: require('./business/update'),
  get: require('./business/get')
};