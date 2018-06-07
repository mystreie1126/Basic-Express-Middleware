const express = require('express');
const hbs = require('hbs');

var app = express();
app.set('view engine','hbs');

app.use(express.static(__dirname + '/public/test'))


app.get('/home',(req,res)=>{
	res.sendFile(__dirname + '/public/test/test.html');
});

app.listen(2525);

