const express = require('express');
const app = express();


// Routes
const homeRoute = require('./routes/home');
const bookResultsRoute = require('./routes/bookResults');
const loginRoute = require('./routes/login.js');
const signupRoute = require('./routes/signup.js');


app.set('port',process.env.PORT || 3000);
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");



// Using routes
app.use('/', homeRoute.router);
app.use('/', bookResultsRoute.router);
app.use('/', loginRoute.router);
app.use('/', signupRoute.router);


app.listen(app.get('port'), () => {
  console.log("The app is running on port ", app.get('port'));
});
