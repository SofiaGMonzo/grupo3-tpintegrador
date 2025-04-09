const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/login', userController.login);
router.post('/login', userController.loginProcess); /*ver */

module.exports = router;
