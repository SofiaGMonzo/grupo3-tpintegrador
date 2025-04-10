const express = require('express');
const router = express.Router();

const userController = {
  login: function (req, res) {
    return res.render('login')
  },
  profile: function (req, res) {
    return res.render('profile')
  },
  register: function (req, res) {
    return res.render('register')
  }
}

module.exports = userController;
