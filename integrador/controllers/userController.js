const express = require('express');
const router = express.Router();
const db = require('../db/baseDatos');


const userController = {
  /*loginProcess: function (req, res) {
    const userId = req.params.id;
    console.log('Login process for user ID:', userId);
    res.send(`Login procesado para el usuario con ID: ${userId}`);
  },

  registerProcess: function (req, res) {
    const userName = req.params.name;
    console.log('Register data:', userName);
    res.send(`Registro procesado para el usuario: ${userName}`);
  },

  profile: function (req, res) {
    const userId = req.params.id;
    res.send(`Perfil del usuario con ID: ${userId}`);
  }*/
  login:function (req, res)  {
    res.render('login'); 
  },

  register: function(req, res)  {
    res.render('register'); 
  },

  profile: function (req, res)  {
    const usuario = data[0]; 
    res.render('profile', { usuario }); 
  } 
};

module.exports = userController;

/*const data = require('../data/usuarios');

module.exports = {
  login: (req, res) => res.render('login'),
  register: (req, res) => res.render('register'),
  perfil: (req, res) => {
    const usuario = data[0]; // Ejemplo de usuario hardcodeado
    res.render('miPerfil', { usuario });
  }
};
 */



/*const data = require('../db/baseDatos'); // Asegurate de tener este archivo

module.exports = {
  login: (req, res) => {
    res.render('login'); // login.ejs
  },

  register: (req, res) => {
    res.render('register'); // register.ejs
  },

  profile: (req, res) => {
    const usuario = data[0]; // tomamos el primer usuario del array
    res.render('miPerfil', { usuario }); // asegurate que tu vista se llame miPerfil.ejs
  }
};*/
