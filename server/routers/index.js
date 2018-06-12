const express = require('express');
const router = express.Router();

const userRoutes = require('./user.route.js');
const tagRoutes = require('./tag.route.js');
const messageRoutes = require('./message.route.js');
const fbtagRoutes = require('./fbtag.route.js');
// api for front-end (shopify-app : step 1~4)

router.use('/userservices', userRoutes);
router.use('/tagservices', tagRoutes);
router.use('/messageservices', messageRoutes);
router.use('/fbtagservices', fbtagRoutes);

module.exports = router;
