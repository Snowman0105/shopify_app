const express = require('express');
const tagCtrl = require('../controllers/tagservices');
const router = express.Router();

router.get('/alltags', tagCtrl.getAllTags);

module.exports = router;
