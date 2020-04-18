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

module.exports.orders = {
  create: require('./orders/create'),
  businesses: {
    update: require('./orders/business/update'),
    get: require('./orders/business/get')
  },
  customers: {
    get: require('./orders/customer/get')
  }
};