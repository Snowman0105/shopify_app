const express = require('express');
const userCtrl = require('../controllers/userservices');
const router = express.Router();

router.post('/login', userCtrl.login);
router.post('/saveindustry', userCtrl.saveIndustry);

module.exports = router;
