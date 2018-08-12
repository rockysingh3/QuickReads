'use strict';
const router = require('express').Router();
const request = require('request');



router.get('/', (req, res, next) => {
      res.render('home');
});


module.exports = {
  router: router
}
