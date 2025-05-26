
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
          dni:document,
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

  processLogin: function (req, res) {
    const { email, password, remember } = req.body;
    db.User.findOne({ where: { email: email } })
      .then(function (user) {
        if (!user) {
          return res.send("El email no está registrado.");
        }

        if (!bcrypt.compareSync(password, user.contrasenia)) {
          return res.send("La contraseña es incorrecta.");
        }
        req.session.user = {
          id: user.id,
          username: user.username,
          email: user.email
        };
        if (remember) {
          res.cookie('userEmail', user.email, { maxAge: 1000 * 60 * 30}); 
        }
        return res.redirect('/user/profile');
      })
      .catch(function (error) {
        console.log(error);
        return res.send("Error al intentar iniciar sesión.");
      });
  },

  logout: function (req, res) {
    res.clearCookie('userEmail'); 
    req.session.destroy(() => {
      res.redirect('/'); 
    });
  },

  profile: function (req, res) {
  if (!req.session.user) return res.redirect("/user/login");

  db.User.findByPk(req.session.user.id, {
    include: [{
      model: db.Product,
      as: "products"
    }]
  })
  .then(function (user) {
    return res.render("profile", {
      user: user,
      products: user.products,
      productCount: user.products.length
    });
  })
  .catch(function (error) {
    console.log(error);
    return res.send("Error al cargar el perfil del usuario.");
  });
}

};

module.exports = userControllers;
