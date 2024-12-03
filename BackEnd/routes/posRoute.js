// routes/posRoute.js
const express = require('express');
const router = express.Router();
const posController = require('../controller/addController');

// Route to get all products
router.get('/products', posController.getAllProducts);

// Route to add product to the cart
router.post('/cart', posController.addToCart);

// Route to create a sale transaction
router.post('/sale', posController.createSale);

module.exports = router;
