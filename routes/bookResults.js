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


module.exports = {
  router: router
}
