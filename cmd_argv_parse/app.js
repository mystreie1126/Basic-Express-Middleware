const _ = require('lodash');
const yargs = require('yargs');
const addnotes = require('./notes');
const fs = require('fs');


/*-------------------1.lodash module:filtering data------------------------------------------------*/

/* npm list -g --depth=0  lists all the global installed package*/
let arr = [1,2,3,4,5,6];

let result = _.chunk(arr,5); // breakdown array into chunks,return [1,2,3,4,5], [6]

let dup_arr = ['loool','lool',2131,3331,2131];

let dup_result = _.uniq(dup_arr); //remove duplicated elements in array

//console.log(dup_result);




/*-------------------2.yargs module:command line argv parsing------------------------------------------------*/

/*-----process.argv-------*/
/*An array containing the command line arguments. 
The first element will be 'node', 
the second element will be the name of the JavaScript file. 
The next elements will be any additional command line arguments.*/

let cmd = process.argv[2]; 

let argv = yargs.argv;

function fetchNotes(){
	try{
		let noteString = fs.readFileSync('test.json');
		return JSON.parse(noteString);
	}catch(e){
		return [];
	}
}

function saveNotes(notes){
	fs.writeFileSync('test.json',JSON.stringify(notes));
}

function addNotes(title,body){
	let notes = fetchNotes();
	let note = {
		title:title,
		body:body
	}

	let duplicateNotes = notes.filter((e)=>title === e.title);
	if(duplicateNotes.length === 0){
		notes.push(note);
		saveNotes(notes);	
		return note;
	}
}


function removeNotes(title,body){
	let notes = fetchNotes();
	let deletedNotes = notes.filter((e)=>title !== e.title);
	saveNotes(deletedNotes);

	return notes.length !== deletedNotes.length;
}






if(cmd==='add'){
	var note = addNotes(argv.title,argv.body);
	//if(note) refers if note object is created go true, 
	//if undefined go fales
	if(note){
		console.log(`title: ${note.title} has added`);
	}else{
		console.log('title taken');
	}
}else if(cmd ==='remove'){
	var removed_notes = removeNotes(argv.title,argv.body);
	var message = removed_notes ? 'Note was removed' : "Note note found";
	console.log(message);
}








