const db = require('../database/models');

const mainController = {
  index: function (req, res) {
    db.Product.findAll()
      .then(function(resultados) {
        return res.render("index", {
          listado: resultados,
          habilitado: true,
        });
      })
      .catch(function(error) {
        return res.send(error);
      });
  },

  searchResults: function (req, res) {
    db.Product.findAll()
      .then(function(resultados) {
        return res.render("search-results", {
          listado: resultados,
          habilitado: true
        });
      })
      .catch(function(error) {
        return res.send(error);
      });
  }
};

module.exports = mainController;
