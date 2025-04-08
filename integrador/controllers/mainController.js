const mainController = {
    index: function(req, res) {
        res.render('index');
    },
    searchResults: function(req, res) {
        // Search logic here
        res.render('search-results');
    },
    products: function(req, res) {
        res.render('products');
    },
    productDetail: function(req, res) {
        res.render('product');
    },
    productAdd: function(req, res) {
        res.render('product-add');
    }
};

module.exports = mainController;
