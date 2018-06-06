const request = require('request');

// request({optical object},(error,response,body)){{}}

request({
	url:'https://maps.googleapis.com/maps/api/geocode/json?address=187%20beauvale%20park%20Artaine',
	json:true
},(error,response,body)=>{
	let geo = body.results[0].geometry.location;

	console.log(geo.lat,geo.lng);
});
