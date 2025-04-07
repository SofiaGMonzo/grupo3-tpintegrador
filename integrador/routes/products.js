const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/products', mainController.products);
router.get('/products/:id', mainController.productDetail);
router.get('/products/add', mainController.productAdd);

module.exports = router;
