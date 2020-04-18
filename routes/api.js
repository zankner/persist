const express = require('express');
const router = express.Router();

const api = require('../api');

// Users
router.post('/users/create', api.users.create);
router.post('/users/:user/update', api.users.update);
router.get('/users/:user/get', api.users.get);

// Businesses
router.post('/businesses/create', api.businesses.create);
router.post('/businesses/:business/update', api.businesses.update);
router.get('/businesses/:business/get', api.businesses.get);

// Orders
router.post('/orders/create', api.orders.create);
router.post('/orders/:order/:business/update', api.orders.businesses.update);
router.post('/orders/:order/business/get', api.orders.businesses.get);
router.post('/orders/:order/customer/get', api.orders.customers.get);

module.exports = router;