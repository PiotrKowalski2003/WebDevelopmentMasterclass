console.log("Hello World");

let myName = prompt("What is your name?");

if (myName) {

    console.log("My name is " + myName);
    console.log("Length: " + myName.length);
    myName.slice(0,1);


} else {
    alert("Error");
}


//140-character limit
alert(prompt("Compose your tweet: ").slice(0,140));

// String Casing
// Creating a var that stores the name that user enters via prompt.
var name = prompt("\nWhat is your name?\n");

// Capitalise the first letter of their name.
var firstChar = name.slice(0,1);

var upperCaseFirstChar = firstChar.toUpperCase();

var restOfName = name.slice(1,name.length);
restOfName = restOfName.toLowerCase();

var capitalisedName = upperCaseFirstChar + restOfName;

console.log("Hello, " + capitalisedName);


// Basic Arithmetic and the Modulo Operator
var dogAge = prompt("\nHow old is your dog?\n");
var humanAge = ((dogAge - 2) * 4) +21;
console.log("Your dog is " + humanAge + " years old in human years.");


