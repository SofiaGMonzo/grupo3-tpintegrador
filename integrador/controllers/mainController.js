const baseDatos = require("../db/baseDatos")

const mainController = {
    index: function(req, res) {
        return res.render('index', {listado : baseDatos.productos,
            habilitado: true
});
    },
    searchResults: function (req, res) {
        return res.render('search-results', {listado : baseDatos.productos,
            habilitado: true
})
      }
};

module.exports = mainController;
