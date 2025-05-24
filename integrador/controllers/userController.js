//const baseDatos = require("../db/baseDatos");
//const db = require("../database/models");
//const User = db.User

//const userController = {
  //login: function (req, res) {
    //return res.render('login')
    
  //},
  //profile: function (req, res) {
    //return res.render('profile', {listaUsuarios: baseDatos.usuario, listaProductos: baseDatos.productos,
      //habilitado: true
   // })
 // },
 // register: function (req, res) {
 //   return res.render('register')
 // }
//}
const db = require("../database/models");
const bcrypt = require("bcryptjs");

const userControllers = {
  register: function (req, res) {
    if (req.session.user) return res.redirect("/user/profile");
    return res.render("register");
  },

  processRegister: function (req, res) {
    const { email, username, password, birthdate, document, profile_picture } = req.body;

    db.User.findOne({ where: { email: email } })
      .then(function (existingUser) {
        if (existingUser) {
          return res.send("Ya existe un usuario con ese email.");
        }

        const nuevoUser = {
          email: email,
          username: username,
          contrasenia: bcrypt.hashSync(password, 10),
          fechaNAC: birthdate,
          dni:parseInt(document),
          foto: profile_picture,
          createdAt: new Date()
        };

        db.User.create(nuevoUser)
          .then(function (user) {
            req.session.user = {
              id: user.id,
              username: user.username,
              email: user.email
            };
            return res.redirect("/user/profile");
          })
      });
  },

  login: function (req, res) {
    if (req.session.user) return res.redirect("/user/profile");
    return res.render("login");
  },

profile: function (req, res) {
  if (!req.session.user) return res.redirect("/user/login");

  db.Product.findAll()
    .then(function(productos) {
      return res.render("profile", {
        listaUsuarios: req.session.user,
        listaProductos: productos,
        habilitado: true
});

    })
    .catch(function(error) {
      return res.send(error);
    });
}
};

module.exports = userControllers;

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