const express = require('express');
const eventCtrl = require('../controllers/eventservices');
const router = express.Router();

router.get('/all', eventCtrl.getAllEvents);

module.exports = router;
