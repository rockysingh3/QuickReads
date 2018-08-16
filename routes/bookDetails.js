'use strict';
const express = require('express');
const app = express();
const router = express.Router();
const request = require('request');




router.get('/bookDetails', (req, res) => {
  res.render('bookDetails');
});

router.post('/bookDetails', (req, res) => {
    let ID = req.body.ID;
  request('https://www.googleapis.com/books/v1/volumes/' + ID, (err, response, body) => {
    if(!err && response.statusCode == 200){
      let bookdata = JSON.parse(body);
      res.render('bookDetails', {bookdata: bookdata});
    }else{
      console.log(err);
    }
  });
});


module.exports = {
  router: router
}
