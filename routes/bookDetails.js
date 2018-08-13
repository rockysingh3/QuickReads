'use strict';
const router = require('express').Router();
const request = require('request');


/// you need get the ID here
// so you can make another api call
// with the id in the url






router.get('/bookDetails', (req, res) => {
  let bookQuery = req.query.searchForBook;
  request('https://www.googleapis.com/books/v1/volumes?q=' + bookQuery, (err, response, body) => {
    if(!err && response.statusCode == 200){
      let apiResultsdata = JSON.parse(body);
      res.render('bookDetails', {apiResultsdata: apiResultsdata});
    }
  });
});


module.exports = {
  router: router
}
