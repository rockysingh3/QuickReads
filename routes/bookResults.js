'use strict';
const router = require('express').Router();
const request = require('request');


router.get('/bookResults', (req, res) => {
  res.render('bookResults');
});


module.exports = {
  router: router
}
