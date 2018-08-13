'use strict';
const router = require('express').Router();
const request = require('request');



router.get('/login', (req, res, next) => {
      res.render('login');
});


module.exports = {
  router: router
}
