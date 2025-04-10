
const express = require('express');
const router = express.Router();

const mainController = {
    index: function(req, res) {
        res.render('index');
    },
    searchResults: function (req, res) {
        return res.render('search-results')
      }
};

module.exports = mainController;
