const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/product-add', productsController.productAdd);     
router.post('/product-add', productsController.storeProduct);  
router.get('/id/:id', productsController.producto);  

module.exports = router;

