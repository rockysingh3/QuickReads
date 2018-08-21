'use strict';
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const router = express.Router();


// Bring in User model
let User = require('../models/users');


router.get('/signup', (req, res, next) => {
      res.render('signup');
});


// Register Proccess
router.post('/signup', (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  const password2 = req.body.password2;

  // error handle all the fields
  req.checkBody('firstName', 'First name is required').notEmpty();
  req.checkBody('lastName', 'Last name is required').notEmpty();
  req.checkBody('email', 'Email is required').notEmpty();
  req.checkBody('email', 'Email is not valid').isEmail();
  req.checkBody('password', 'Password is required').notEmpty();
  req.checkBody('password2', 'Passwords do not match').equals(req.body.password);


  let errors = req.validationErrors();

  // handle the error
  if(errors){
    res.render('signup', {errors: errors});
  }else {
    let newUser = new User({
      firstName:firstName,
      lastName:lastName,
      email:email,
      password:password
    });

    //hash the password
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if(err){
          console.log(err);
        }
        newUser.password = hash;
        newUser.save((err) => {
          if(err){
            console.log(err);
            return;
          }else{
            req.flash('success', 'You are now registered and can log in');
            res.redirect('login');
          }
        });
      });
    });
  }


});


module.exports = {
  router: router
}
