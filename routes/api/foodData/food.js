const express = require("express");
const util = require("util");
const router = express.Router();
var request = require('request');

router.get("/ws/:query", (req, res) => {
const foodQuery = req.params.query;
var newQuery = "?$where=fooditems like %27%25$QUERY%25%27"
newQuery = newQuery.replace('$QUERY', foodQuery);
var foodUrl = 'https://data.sfgov.org/resource/rqzj-sfat.json'+newQuery
console.log(foodUrl)
	request({
		method: 'GET',
		url: foodUrl,
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		}
	}, function (error, response, body) {

		var data = JSON.parse(body);
		//console.table(data)
		res.json(data);
		if (error) {
			console.log(`Response connecting to SFData \n${error}\n-----------------`)
		}
		if (response) {
			console.log(`Response connecting to SFData \n${response.statusCode}\n-----------------`)
		}
	});

});
module.exports = router;