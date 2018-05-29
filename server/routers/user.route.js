const express = require('express');
const userCtrl = require('../controllers/userservices');
const router = express.Router();

router.post('/auth', userCtrl.auth);

module.exports = router;
