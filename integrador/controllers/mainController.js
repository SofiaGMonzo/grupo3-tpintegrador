const mainController = {
    index: (req, res) => {
        res.render('index');
    },
    searchResults: (req, res) => {
        // Search logic here
        res.render('search-results');
    },
    products: (req, res) => {
        res.render('products');
    },
    productDetail: (req, res) => {
        res.render('product');
    },
    productAdd: (req, res) => {
        res.render('product-add');
    }
};

module.exports = mainController;
