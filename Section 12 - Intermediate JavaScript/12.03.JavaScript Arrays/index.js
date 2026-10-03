var guestList = ["Jack", "Pam", "James", "Lara", "Jason"];
console.log(guestList);
console.log(guestList.length);

console.log(guestList[0]);

var guestName = prompt("What is your name?");
if(guestList.includes(guestName)){
    console.log("Welcome");
} else {
    console.log("You are looking for the wrong name!");
}


