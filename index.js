const exp = require('express');
const requestN = require('request');

const port = process.env.PORT || 3001;

//add your URL here
const web_site = "https://calm-bayou-88483.herokuapp.com/"

const app = exp();

// function to generate random time for timer
const timeGen = () => {
	return time = (20 + Math.random() * 10) *60 *1000; //generates random time between 20-30 mins
}

setInterval(

	function(){

		requestN.get( web_site, (err, res, body) => {

			console.log('status : ' + res.statusCode);

			if(err){
				console.log('error');
			}
		});
	}, timeGen());

app.listen(port, (req, res) => {
	console.log('ping-pong listening on port: ' + port);
});