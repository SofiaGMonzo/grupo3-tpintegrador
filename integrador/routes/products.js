const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/add', productsController.productAdd);
router.get('/', productsController.product);
router.get('/detail', productsController.productDetail);

module.exports = router;
