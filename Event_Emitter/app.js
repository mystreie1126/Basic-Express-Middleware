function Greet(firstname,lastname){
	this.firstname = firstname;
	this.lastname = lastname;
	this.greeting = function(){
		console.log(`hello ${this.firstname}`);
	}
}

Greet.prototype.fuck = function(){
	console.log(`ni hao ${this.firstname} motherfucker`);
}

var person1 = new Greet('Joe','Doe');
var person2 = new Greet('Jane','Doe');

person1.greeting();
person1.fuck();

console.log(person1.__proto__ === person2.__proto__);