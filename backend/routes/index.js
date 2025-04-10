// routes/index.js
const express = require('express');
const router = express.Router();

const userRoute = require('./userRoutes');
const adminRoute = require('./adminRoute');
const productRoute = require('./productRoute');

// Connect all routes here
router.use('/user', userRoute);
router.use('/admin', adminRoute);
router.use('/products',productRoute
    // productRoute
); 

module.exports = router;
