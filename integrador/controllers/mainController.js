const mainController = {
    index: function(req, res) {
        res.render('index');
    },
    searchResults: function(req, res) {
        // Search logic aca
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
    },
    setLocals: function (req, res, next) {
        res.locals.isLoggedIn = false; // o algo dinámico
        next();
      }
};

module.exports = mainController;
