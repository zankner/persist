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
router.post('/businesses/:business/billing/connect', api.businesses.billing.connect);
router.get('/businesses/billing/create', api.businesses.billing.create);
router.post('/businesses/:business/admin/update', api.businesses.admin.update);
router.get('/businesses/:business/admin/get', api.businesses.admin.get);
router.get('/businesses/:business/admin/dashboard', api.businesses.admin.dashboard);

// Orders
router.post('/orders/create', api.orders.create);
router.post('/orders/:order/business/:business/update', api.orders.businesses.update);
router.get('/orders/:order/business/get', api.orders.businesses.get);
router.post('/orders/:order/customer/update', api.orders.customers.update);
router.get('/orders/:order/customer/get', api.orders.customers.get);

// Products
router.post('/products/businesses/:business/create', api.products.create);
router.post('/products/:product/update', api.products.update);
router.get('/products/:product/get', api.products.update);

module.exports = router;