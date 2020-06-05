const express = require("express");
const util = require("util");
const router = express.Router();
var request = require('request');

router.get("/ws/:query", (req, res) => {
const newQuery = req.params.query;
//https://atlas.microsoft.com/search/address/json?api-version=1&query=#LOCATION&subscription-key=KEY
var key = process.env.mapsPrimaryKey
var mapURL = 'https://atlas.microsoft.com/search/address/json?api-version=1&query='+newQuery+'&subscription-key='+key
console.log(mapURL)
	request({
		method: 'GET',
		url: mapURL,
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		}
	}, function (error, response, body) {

		var data = JSON.parse(body);
		//console.table(data)
		res.json(data);
		if (error) {
			console.log(`Response connecting to Azure Maps \n${error}\n-----------------`)
		}
		if (response) {
			console.log(`Response connecting to Azure Maps \n${response.statusCode}\n-----------------`)
		}
	});

});
module.exports = router;