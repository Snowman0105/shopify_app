const express = require('express');
const msgCtrl = require('../controllers/messageservices');
const router = express.Router();

router.get('/all', msgCtrl.getAll);
router.get('/messages/:id', msgCtrl.getMessage);

router.post('/create', msgCtrl.create);
router.put('/update/id/:id', msgCtrl.updateMessage);

module.exports = router;
