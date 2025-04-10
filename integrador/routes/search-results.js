const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController'); // O el controlador que estés usando

router.get('/', mainController.searchResults); // o el handler que corresponda

module.exports = router;
