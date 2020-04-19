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
    update: require('./orders/customer/udpate'),
    get: require('./orders/customer/get')
  }
};

module.exports.products = {
  create: require('./products/create'),
  update: require('./products/update'),
  get: require('./products/get')
};