//Set Local Envrionment Variables:
const dotenv = require('dotenv');
dotenv.config();
//Set rest of Variables:
const express = require("express");
const cors = require('cors');
const Sigsci = require('sigsci-module-nodejs');
const sigsci = new Sigsci({ path: '/tmp/sigsci.sock' });

const app = express();
if (process.env.SigSci !== "local") {app.use(sigsci.express())} //Check if .env has SigSci = dev as we don't want to login to sigsci on local
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

//EXAMPLE
//app.use('/whatever you want the url to be BEFORE PARAMETERS', variable name for route)
app.use('/foodws/base/', baseAPI);

app.listen(web_port, function() {
  console.log("app.js Server listening on " + web_port);
  
}).timeout = 0
