const express = require('express');
const router = express.Router();
const baseDatos = require("../db/baseDatos")

const productsController = {
    productAdd: function (req, res) {
        return res.render ('product-add')
    },   
    product: function (req, res) {
        const idBuscado = req.params.id;
        const producto = {}
        for (let i = 0; i < baseDatos.productos.length; i++) {
            const element = array[i];
            if (element.id == idBuscado) {
                producto = element
            }       
        }

        return res.render ('product', {producto:  producto,
        })
},
    productDetail: function (req, res){
        return res.render ('product')
    }
}

module.exports = productsController;