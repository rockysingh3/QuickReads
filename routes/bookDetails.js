'use strict';
const express = require('express');
const app = express();
const router = express.Router();
const request = require('request');
const bodyParser = require('body-parser');


/// you need get the ID here
// so you can make another api call
// with the id in the url
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



router.get('/bookDetails', (req, res) => {
    res.render('bookDetails');
});

router.post('/bookDetails', (req, res) => {
  console.log(req.body.ID);
});


module.exports = {
  router: router
}
