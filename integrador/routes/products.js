const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/product-add', productsController.productAdd);
router.get('/', productsController.product);
router.get('/id/:id', productsController.productDetail);

module.exports = router;
