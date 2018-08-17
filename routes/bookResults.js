'use strict';
const router = require('express').Router();
const request = require('request');




router.get('/bookResults', (req, res) => {
  let bookQuery = req.query.searchForBook;
  request('https://www.googleapis.com/books/v1/volumes?q=' + bookQuery, (err, response, body) => {
    if(!err && response.statusCode == 200){
      let apiResultsdata = JSON.parse(body);
      res.render('bookResults', {apiResultsdata: apiResultsdata});
    }
  });
});


router.get('/books/:id', (req, res) => {
  let id =  req.params.id;
  request('https://www.googleapis.com/books/v1/volumes/' + id, (err, response, body) => {
    if(!err && response.statusCode == 200){
      let bookdata = JSON.parse(body);
      res.render('bookDetails', {bookdata: bookdata});
    }
  });
});


module.exports = {
  router: router
}
