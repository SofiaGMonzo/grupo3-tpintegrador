const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/:id', productsController.product);
router.get('/product-add', productsController.productAdd);
router.get('/id/:id', productsController.productDetail);

module.exports = router;
