var express = require('express');
var router = express.Router();
const mainController = require("../controllers/mainController");

router.get('/', mainController.index);
router.get('/search-results', mainController.searchResults);


module.exports = router;

/* PARA EL PUNTO 7
const productsController = require("../controllers/productsController");

router.get('/', productsController.index);
*/

