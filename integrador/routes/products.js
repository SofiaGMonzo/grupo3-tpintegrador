const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/add', mainController.productAdd);
router.get('/:id', mainController.productDetail);
router.get('/', mainController.products);

module.exports = router;
