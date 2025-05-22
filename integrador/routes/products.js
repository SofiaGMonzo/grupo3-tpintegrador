const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/id/:id', productsController.producto); 
router.get('/product-add', productsController.productAdd);
router.get('/product/:id', productsController.producto);

module.exports = router;
