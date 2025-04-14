const express = require('express');
const router = express.Router();
const baseDatos = require("../db/baseDatos")

const productsController = {
    productAdd: function (req, res) {
        return res.render ('product-add')
    },   
    product: function (req, res) {
        const idBuscado = req.params.id;
        let idEncontrado = [];
    
        for (let i = 0; i < baseDatos.productos.length; i++) {
            const element =  baseDatos.productos[i];
    
            if (element.id == idBuscada) {
                idEncontrado.push(element);
            }
            
        }
    
        return res.send(idEncontrado)
        return res.render ('product')
},
    productDetail: function (req, res){
        return res.render ('product')
    }
}

module.exports = productsController;