const express = require('express');
const webhookServices = require('../services/webhook');
const router = express.Router();

router.post('/carts-create', webhookServices.addCats);
router.post('/carts-update', webhookServices.updateCats);
router.post('/checkouts-create', webhookServices.createCheckouts);
router.post('/checkouts-update', webhookServices.updateCheckouts);
router.post('/checkouts-delete', webhookServices.deleteCheckouts);
router.post('/collections-create', webhookServices.createCollections);
router.post('/collections-delete', webhookServices.deleteCollections);
router.post('/collections-update', webhookServices.updateCollections);
router.post('/customers-create', webhookServices.createCustomers);
router.post('/customers-disable', webhookServices.disableCustomers);
router.post('/customers-delete', webhookServices.deleteCustomers);
router.post('/customers-update', webhookServices.updateCustomers);

module.exports = router;
