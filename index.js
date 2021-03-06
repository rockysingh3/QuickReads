const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const expressValidator = require('express-validator');
app.use(expressValidator())
// configration file
const config = require('./config');
// connects to the DB
const mongoose = require('mongoose').connect(config.dbURI, (err) => {
  if(err){
    console.log("Mongoose error: " + err);
  }else{
    console.log("Mongoose is connected");
  }
});




app.use(flash());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Routes
const homeRoute = require('./routes/home');
const bookResultsRoute = require('./routes/bookResults');
const loginRoute = require('./routes/login');
const signupRoute = require('./routes/signup');
const summariesRoute = require('./routes/summaries');


app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");



// Using routes
app.use('/', homeRoute.router);
app.use('/', bookResultsRoute.router);
app.use('/', loginRoute.router);
app.use('/', signupRoute.router);
app.use('/', summariesRoute.router);


app.listen(app.get('port'), () => {
  console.log("The app is running on port: " + app.get('port'));
});
