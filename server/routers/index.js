const express = require('express');
const router = express.Router();

const userRoutes = require('./user.route.js');

// api for front-end (shopify-app : step 1~4)

router.use('/userservices', userRoutes);

module.exports = router;
