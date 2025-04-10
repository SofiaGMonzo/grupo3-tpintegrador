
const baseDatos = require('../db/baseDatos');

const mainController = {
    index: function(req, res) {
        res.render('index');
    },
    searchResults: function (req, res) {
        return res.render('search-results', {baseDatos})
      }
};

module.exports = mainController;
