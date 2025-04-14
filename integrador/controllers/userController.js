const baseDatos = require("../db/baseDatos");

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

module.exports = userController;
