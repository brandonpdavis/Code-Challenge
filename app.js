//Set Local Envrionment Variables:
const dotenv = require('dotenv');
dotenv.config();
//Set rest of Variables:
const express = require("express");
const cors = require('cors');
const app = express();
const web_port = process.env.PORT;
const morgan = require("morgan");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());



app.use(express.static("./public"));
app.use(cors());

app.use(morgan("short"));
app.get("/", function(req, res) {
  res.send("Hello world");
});

//API ROUTES
//EXAMPLE:
// let variablenameRoute = require('path to js file for route')
const baseAPI = require('./routes/api/foodData/food.js');
const mapsAPI = require('./routes/api/maps/maps.js');
//EXAMPLE
//app.use('/whatever you want the url to be BEFORE PARAMETERS', variable name for route)
app.use('/food', baseAPI);
app.use('/maps', mapsAPI);

app.listen(web_port, function() {
  console.log("app.js Server listening on " + web_port);
  
}).timeout = 0
