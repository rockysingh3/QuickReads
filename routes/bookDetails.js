'use strict';
const express = require('express');
const app = express();
const router = express.Router();
const request = require('request');




router.get('/bookDetails', (req, res) => {
  res.render('bookDetails');
});

router.post('/bookDetails', (req, res) => {
  console.log(req.body.ID);
  res.render('bookDetails');
});


module.exports = {
  router: router
}
