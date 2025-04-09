const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rutas con parámetros
router.get('/login/:id', userController.loginProcess);
router.get('/register/:name', userController.registerProcess);
router.get('/profile/:id', userController.profile);

module.exports = router;
