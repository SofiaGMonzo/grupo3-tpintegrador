
const baseDatos = require("../db/baseDatos");

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

module.exports = productsController;