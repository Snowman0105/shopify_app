const express = require('express');
const fbtagCtrl = require('../controllers/fbtagservices');
const router = express.Router();

router.get('/all', fbtagCtrl.getAll);

module.exports = router;
