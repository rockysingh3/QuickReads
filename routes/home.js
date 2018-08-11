'use strict';
const router = require('express').Router();
const request = require('request');



router.get('/', (req, res, next) => {
  request('https://www.googleapis.com/books/v1/volumes?q=harry+potter', (err, response, body) => {
    if(!err && response.statusCode == 200){
      let apiResults = JSON.parse(body);
      res.render('home');
    }
  });
  //res.render('home');
});


module.exports = {
  router: router
}
