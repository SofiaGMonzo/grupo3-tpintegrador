const db = require("../database/models");
const Product = db.Product;
let op = db.Sequelize.Op;  // no lo vimos asi me acabo de dar cuenta 

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
      comentarioInfo: nuevoProducto.comentarios
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
    console.log("SESSION:", req.session);
    db.User.findAll()
      .then(function (usuarios) {
        return res.render("product-add", {
          listaUsuarios: usuarios,
          habilitado: true,
          usuarioId: req.session.user.id //corrijo en lugar de usuarioId 
        });
      })
      .catch(function (error) {
        return res.send(error);
      });
      db.User.findAll()
  },

  storeProduct: function (req, res) {
    if (!req.session.user) {
      return res.redirect('/user/login');
    }
    let image = req.body.image;
    let name = req.body.name;
    let description = req.body.description; 

    db.Product.create({
      imagen: image,
      nombre: name,
      descripcion: description,
      usuarioId: req.session.user.id 
    })
    .then(function () {
      return res.redirect('/user/profile');
    })
    .catch(function (error) {
      console.error(error);
      return res.send("Error al crear el producto.");
    });
  }, 
  crearComentario: function (req, res) {
    //return res.send(req.body)
    if (req.session.user == undefined) {
      return res.redirect("/user/login");
    }
    else {
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
  }},
  productcreate: function(req, res){
    if (req.session.user == undefined) {
      return res.redirect("/user/login");
    }
    else{
      db.product.create({
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      imagen: req.body.imagen
      })
    
    .then(function() {
      res.redirect("/products"); // o donde quieras ir después
    })
    .catch(function(error) {
      console.error("Error al crear el producto:", error);
      res.send("Error al crear el producto: " + error.message);
    })
  }
}
  
};

module.exports = productsController;
