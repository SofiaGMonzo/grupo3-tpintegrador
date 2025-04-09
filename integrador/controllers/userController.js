const db = require('../db/baseDatos');

const userController = {
  login: function(req, res){
    res.render('login'); 
  },
  
  loginProcess: function (req, res) {
    console.log(/*completar */); 
    res.send('Login procesado');
  },
  register: (req, res) => {
    res.render('register');
  },

  registerProcess: function(req, res)  {
    console.log('Register data:', /*completar */);
    res.send('Registro procesado (GET)');
  },

  profile: function (req, res) {
    /*completar */
  }
};

module.exports = userController;
