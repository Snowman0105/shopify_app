const express = require('express');
const userCtrl = require('../controllers/userservices');
const router = express.Router();

router.post('/login', userCtrl.login);

module.exports = router;
