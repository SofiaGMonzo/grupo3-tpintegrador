const baseDatos = require("../db/baseDatos");
const db = require("../database/models");
const User = db.User

const userController = {
  login: function (req, res) {
    return res.render('login')
    
  },
  profile: function (req, res) {
    return res.render('profile', {listaUsuarios: baseDatos.usuario, listaProductos: baseDatos.productos,
      habilitado: true
    })
  },
  register: function (req, res) {
    return res.render('register')
  }
}
/*ver como aplicar al trabajo
let userController = {

    User.findAll({
        include: [
            {Association:"product"}
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

module.exports = userController;
