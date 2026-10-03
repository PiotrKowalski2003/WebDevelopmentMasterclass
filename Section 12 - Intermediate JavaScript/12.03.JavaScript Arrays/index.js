// var guestList = ["Jack", "Pam", "James", "Lara", "Jason"];
// console.log(guestList);
// console.log(guestList.length);
//
// console.log(guestList[0]);

// var guestName = prompt("What is your name?");
// if(guestList.includes(guestName)){
//     console.log("Welcome");
// } else {
//     console.log("You are looking for the wrong name!");
// }


// Adding Elements
var output = [];
var count = 1;

function fizzBuzz(){

    if (count % 3 === 0 && count % 5 === 0) {
        output.push("FizzBuzz");
    }
    else if(count % 3 === 0){
        output.push("Fizz");
    }
    else if (count % 5 === 0){
        output.push("Buzz");
    }
    else {
        output.push(count);
    }

    count++;
    console.log(output);
}

fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();


