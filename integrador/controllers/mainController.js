
const express = require('express');
const router = express.Router();

const mainController = {
    index: function(req, res) {
        res.render('index');
    },
    searchResults: function (req, res) {
        return res.render('search-results')
      },
    /*searchResults: function (req, res) {
        let search = req.params.search;
    
        let productos = baseDatos.productos;
    
        let resultados = COMPLETAR 
    
        res.render('search-results', { search, resultados });
      }*/
};

module.exports = mainController;
