const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
 
router.get('/login', userController.login);

router.get('/register', userController.register);      
router.post('/register', userController.processRegister);

router.post('/login', userController.processLogin);
router.get('/logout', userController.logout);

router.get('/:id', userController.profile);
router.get('/profile', userController.profile);

router.get('/profile/:username', userController.perfilUsuario);
module.exports = router;