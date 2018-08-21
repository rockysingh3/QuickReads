'use strict';
const router = require('express').Router();
const request = require('request');




router.get('/bookResults', (req, res) => {
    // quering for string typed in input field on the home page
    let bookQuery = req.query.searchForBook;
    // making call to google books api with a search word
    const URL = 'https://www.googleapis.com/books/v1/volumes?q=' + bookQuery + '&maxResults=40&orderBy=relevance';
    request(URL, (err, response, body) => {
          if (!err && response.statusCode == 200) {
              let apiResultsdata = JSON.parse(body);
              res.render('bookResults', { apiResultsdata: apiResultsdata });
          } else {
              console.log(err);
          }
    });
});


router.get('/books/:id', (req, res) => {
    // getting the id of one book from bookResults page
    let id = req.params.id;
    //making a call to google books api with a ID of one book 
    const URL = 'https://www.googleapis.com/books/v1/volumes/' + id;
    request(URL, (err, response, body) => {
          if (!err && response.statusCode == 200) {
              let bookdata = JSON.parse(body);
              res.render('bookDetails', { bookdata: bookdata });
          } else {
              console.log(err);
          }
    });
});


module.exports = {
  router: router
}
