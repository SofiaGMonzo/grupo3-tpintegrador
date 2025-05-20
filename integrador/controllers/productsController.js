
const baseDatos = require("../db/baseDatos");
const db = require("../database/models");
const Product = db.Product

const productsController = {
    productAdd: function (req, res) {
        return res.render ('product-add',  {listaUsuarios: baseDatos.usuario,
            habilitado: true
          })
    },   
    product: function (req, res) {
        
        let idBuscado = req.params.id;
        let nuevoProducto = baseDatos.filtrarId(idBuscado);
       

        return res.render('product', 
            {
                info: nuevoProducto,
                comentarioInfo: nuevoProducto[0].comentarios
            }
        )
    }, 
    
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
module.exports = productsController;

