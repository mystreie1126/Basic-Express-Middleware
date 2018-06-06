const _ = require('lodash');
const fs = require('fs');

var note = {
	name:'jian',
	age:30
}

function str_json(e){
	return JSON.stringify(e); /*-----convert obj to string ------*/
}


function parse_json(e){
	return JSON.parse(e); 	/*-----convert str to obj ------*/
}


fs.writeFileSync('notes.json',str_json(note)); //wrote to a file with string

var note_str = fs.readFileSync('notes.json'); //get string data from file
