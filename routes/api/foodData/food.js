const express = require("express");
const util = require("util");
const router = express.Router();
var request = require('request');

router.get("/:query", (req, res) => {
const titleId = req.params.query;
	request({
		method: 'GET',
		url: 'https://prod.flow.data-city.io/v2/title/'+`${titleId}`+process.env.FlowKey,
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		}
	}, function (error, response, body) {

		var data = JSON.parse(body);
		console.table(data)
		res.json(data);
		if (error) {
			console.log(`Response connecting to flow \n${error}\n-----------------`)
		}
		if (response) {
			console.log(`Response connecting to flow \n${response.statusCode}\n-----------------`)
		}
	});

});
module.exports = router;