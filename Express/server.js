/* From the nodemon documentation: 
By default, nodemon looks for files with the .js , .mjs , .coffee , .litcoffee  
and .json  extensions. However, you can specify your own list with the -e  switch: 
such as nodemon server.js -e js,hbs */



 
const express = require('express');
const hbs = require('hbs');

var app = express();

/*------------handlebars---------------------*/

//set view engine to hbs
app.set('view engine','hbs');


//regiester reuseable piece for hbs, {{ > partialFileName}} 
hbs.registerPartials(__dirname +'/views/partials')

//handlebar helper

hbs.registerHelper('currentYear',()=>{
	return new Date().getFullYear();
});

//further helper filter/pipe function
hbs.registerHelper('upper',(e)=>{
	return e.toUpperCase();
});

/*-------------middleware-----------------*/
//app.use() means: i wanna everysingle quest come into the server to be run though the function

//absolute path to render the file at /public
app.use(express.static(__dirname + '/public'));

app.get('/',(req,res)=>{
	res.render('home.hbs',{
		pageTitle:'Home Page',
		wellcomeMsg:'NI HAO mother fucker',
	});


});

app.get('/about',(req,res)=>{
	res.render('about.hbs',{
		pageTitle: 'About page',
	})
});



app.listen(3000,()=>{
	console.log('listening 3000');
});

