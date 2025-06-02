const db = require("../database/models");
const Product = db.Product;

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

  producto: function(req, res) {
    let idBuscado = req.params.id;
    Product.findByPk(idBuscado, {
      include: [
        { association: "usuario" },
        { association: "comentarios",
          include: ["usuario"]  
        }
      ]
    })
    .then(function(nuevoProducto) {
      if (!nuevoProducto) {
        return res.status(404).send('Producto no encontrado');
      }
      return res.render('product', {
        info: nuevoProducto,
        comentarioInfo: nuevoProducto.comentarios,
        user: req.session.user 
      });
    })
    .catch(function(error) {
      console.error(error);
      return res.status(500).send("Error al obtener el producto.");
    });
  },

  searchResults: function (req, res) {
    let busqueda = req.query.busqueda;

    db.Product.findAll({
      where: {
        nombre: busqueda
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
          habilitado: true,
          usuarioId: req.session.user.id  
        });
      })
      .catch(function (error) {
        return res.send(error);
      });
  },

  crearComentario: function (req, res) {
    if (req.session.user == undefined) {
      return res.redirect("/user/login");
    } else {
      db.Comentario.create({
        producto_id: req.body.producto_id,
        usuario_id: req.session.user.id,
        texto: req.body.comentario
      })
      .then(function () {
        return res.redirect("/products/id/" + req.body.producto_id);
      })
      .catch(function (error) {
        console.log(error);
        return res.send("Error al crear el comentario.");
      });
    }
  },

  productcreate: function(req, res){
    db.Product.create({
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      imagen: req.body.image,
      usuario_id: req.session.user.id  
    })
    .then(function() {
      res.redirect("/");
    })
    .catch(function(error) {
      console.error("Error al crear el producto:", error);
      res.send("Error al crear el producto: " + error.message);
    });
  }
};

module.exports = productsController;
