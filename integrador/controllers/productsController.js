const db = require("../database/models");
let op = db.Sequelize.Op;

const productsController = {
  index: function (req, res) {
    db.Product.findAll({
      include: [{ association: "usuario" }]
    })
    .then(function (products) {
      return res.render("products", { products });
    })
    .catch(function (error) {
      return res.send(error);
    });
  },

  show: function (req, res) {
    let productId = req.params.id;
    db.Product.findByPk(productId, {
      include: [
        { association: "usuario" },
        {
          association: "comentarios",
          include: [{ association: "usuario" }]
        }
      ]
    })
    .then(function (product) {
      if (!product) {
        return res.status(404).send("Producto no encontrado");
      }
      return res.render("productDetail", { product });
    })
    .catch(function (error) {
      return res.send(error);
    });
  },

  searchResults: function (req, res) {
    let busqueda = req.query.busqueda;

    db.Product.findAll({
      where: {
        nombre: {
          [op.like]: "%" + busqueda + "%"
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
  },

  productAdd: function (req, res) {
    db.User.findAll()
      .then(function (usuarios) {
        return res.render("product-add", {
          listaUsuarios: usuarios,
          habilitado: true
        });
      })
      .catch(function (error) {
        return res.send(error);
      });
  },

  storeProduct: function (req, res) {
    // Verifico que el usuario esté logueado
    if (!req.session.user) {
      return res.redirect('/user/login');
    }

    // Extraigo datos del form
    var image = req.body.image;
    var name = req.body.name;
    var description = req.body.description;

    // Creo el producto asociándolo al usuario logueado
    db.Product.create({
      imagen: image,
      nombre: name,
      descripcion: description,
      usuarioId: req.session.user.id  // importante para la relación
    })
    .then(function () {
      return res.redirect('/user/profile');
    })
    .catch(function (error) {
      console.error(error);
      return res.send("Error al crear el producto.");
    });
  }
};

module.exports = productsController;
