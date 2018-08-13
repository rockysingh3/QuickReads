'use strict';
const router = require('express').Router();
const request = require('request');



router.get('/signup', (req, res, next) => {
      res.render('signup');
});


module.exports = {
  router: router
}
