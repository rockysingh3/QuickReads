const express = require('express');
const app = express();


// Routes
const homeRoute = require('./routes/home');
const bookResultsRoute = require('./routes/bookResults');



app.set('port',process.env.PORT || 3000);
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");



// Using routes
app.use('/', homeRoute.router);
app.use('/', bookResultsRoute.router);


app.listen(app.get('port'), () => {
  console.log("The app is running on port ", app.get('port'));
});
