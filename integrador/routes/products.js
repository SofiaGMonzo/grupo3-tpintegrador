const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/', productsController.index); //agrego para el 7
router.get('/product-add', productsController.productAdd);     
router.post('/product-add', productsController.storeProduct);  
router.get('/id/:id', productsController.producto);  
router.post("/comentarios/crear", productsController.crearComentario);
module.exports = router;

