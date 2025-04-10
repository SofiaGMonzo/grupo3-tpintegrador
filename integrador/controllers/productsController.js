
const baseDatos = require('../db/baseDatos');

const productsController = {
    productAdd: function (req, res) {
        return res.render ('product-add', {baseDatos})
    },
    
    product: function (req, res) {
        return res.render ('product', {baseDatos})
}
}

module.exports = productsController;