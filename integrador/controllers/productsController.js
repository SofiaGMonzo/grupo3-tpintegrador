const baseDatos = require("../db/baseDatos");
const db = require("../database/models");
const Product = db.Product;
const Comentario = db.Comentario;

const productsController = {
    productAdd: function (req, res) {
        return res.render('product-add', {
            listaUsuarios: baseDatos.usuario,
            habilitado: true
        });
    },

    product: function (req, res) {
        let idBuscado = req.params.id;
        let nuevoProducto = baseDatos.filtrarId(idBuscado);

        return res.render('product', {
            info: nuevoProducto,
            comentarioInfo: nuevoProducto[0].comentarios
        });
    },

    producto: function(req, res) {
        let idBuscado = req.params.id;
        console.log('idBuscado:', idBuscado); 

        Product.findByPk(idBuscado, {
            include: [
                { association: "usuario" },
                { association: "comentarios" }
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

    comentariosRandom: function (req, res) {
        const { producto_id, usuario_id, texto } = req.body;
        Comentario.create({
            producto_id,
            usuario_id,
            texto
        })
        .then(function() {
            return res.redirect(`/product/${producto_id}`); 
        })
        .catch(function(error) {
            console.error(error);
            return res.status(500).send("Error al agregar el comentario.");
        });
    }
};

module.exports = productsController;




// esto sigue tirando error 

/* Esto era lo que estaba antes que habia hecho brisa soy emma 
const baseDatos = require("../db/baseDatos");
const db = require("../database/models");
const Product = db.Product
const Comentario = db.Comentario; // Importar el modelo de Comentarios

const productsController = {
    productAdd: function (req, res) {
        return res.render ('product-add',  {listaUsuarios: baseDatos.usuario,
            habilitado: true
          })
    },   
    /*product: function (req, res) {
        
        let idBuscado = req.params.id;
        let nuevoProducto = baseDatos.filtrarId(idBuscado);
       

        return res.render('product', 
            {
                info: nuevoProducto,
                comentarioInfo: nuevoProducto[0].comentarios
            }
        )

    },   
    producto: function(req, res) {
    let idBuscado = req.params.id;
    console.log('idBuscado:', idBuscado); // Para debug

     Product.findByPk(idBuscado, {
         include: [
            { association: "usuario" },
            { association: "comentarios" }
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
       comentariosRandom: function (req, res) {
        const { producto_id, usuario_id, texto } = req.body;
        Comentario.create({
            producto_id,
            usuario_id,
            texto
        })
        .then(function() {
            return res.redirect(`/product/${producto_id}`); 
        })
        .catch(function(error) {
            console.error(error);
            return res.status(500).send("Error al agregar el comentario.");
        });
    }
}

/*ver como aplicar al trabajo
let productsController = {

    Product.findAll({
        include: [
            {Association:"user"}
        ]
    })
    .then(function(resultados){
        return 
    })
    .catch(function(error){
        return 
    })
}
*/

//hacer aca lo de comentarios, NO  un nuevo controller module.exports = productsController;

