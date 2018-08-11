const express = require('express');
const app = express();

const homeRoute = require('./routes/home');



app.set('port',process.env.PORT || 3000);
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");




app.use('/', homeRoute.router);


app.listen(app.get('port'), () => {
  console.log("The app is running on port ", app.get('port'));
});
