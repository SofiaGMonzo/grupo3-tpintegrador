/*const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.get('/login/:id', userController.loginProcess);
router.get('/register/:name', userController.registerProcess);
router.get('/profile/:id', userController.profile);

module.exports = router;*/

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/login', userController.login);
router.get('/register', userController.register);
router.get('/profile', userController.profile);

module.exports = router;
