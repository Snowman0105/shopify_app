const express = require('express');
const webhookServices = require('../services/webhook');
const router = express.Router();

router.post('/carts-create', webhookServices.addCats);
router.post('/carts-update', webhookServices.updateCats);

module.exports = router;
