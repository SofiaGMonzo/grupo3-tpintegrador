const express = require('express');
const router = express.Router();

const productsController = {
    productAdd: function (req, res) {
        return res.render ('product-add')
    },   
    product: function (req, res) {
        return res.render ('product')
},
    productDetail: function (req, res){
        return res.render ('productDetail')
    }
}

module.exports = productsController;