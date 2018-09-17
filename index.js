const exp = require('express');
const requestN = require('request');

const port = process.env.PORT || 3001;

const web_site = COMPLETE_URL_OF_WEBSITE_ALONG_WITH_HTTP/HTTPS

const app = exp();

const timeGen = () => {
	return time = (15 + Math.random() * 10) *60 *1000; //generates random time between 20-30 mins
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