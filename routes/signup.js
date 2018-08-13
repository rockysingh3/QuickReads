'use strict';
const express = require('express');
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

  req.checkBody('firstName', 'First name is required').notEmpty();
  req.checkBody('lastName', 'Last name is required').notEmpty();
  req.checkBody('email', 'Email is required').notEmpty();
  req.checkBody('email', 'Email is not valid').isEmail();
  req.checkBody('password', 'Password is required').notEmpty();
  req.checkBody('password2', 'Passwords do not match').equals(req.body.password);


  let errors = req.validationErrors();

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
  }


});


module.exports = {
  router: router
}
