const db = require('../database/models');

const mainController = {
  index: function (req, res) {
    db.Product.findAll({
      include: [{ association: "usuario" }]
    })
    .then(function(resultados) {
      return res.render("index", {
        listado: resultados,
        habilitado: true
      });
    })
    .catch(function(error) {
      return res.send(error);
    });
  },

  searchResults: function (req, res) {
    let busqueda = req.query.busqueda;

    db.Product.findAll({
      where: {
        nombre: {
          [db.Sequelize.Op.like]: "%" + busqueda + "%" // corregir es un where
        }
      },
      include: [{ association: "usuario" }]
    })
    .then(function(resultados) {
      let mensaje = null;
      if (resultados.length === 0) {
        mensaje = "No hay resultados para su criterio de búsqueda";
      }

      return res.render("search-results", {
        listado: resultados,
        habilitado: true,
        mensaje: mensaje,
        searchTerm: busqueda
      }); 
    })
    .catch(function(error) {
      return res.send(error);
    });
  }
};

module.exports = mainController;
