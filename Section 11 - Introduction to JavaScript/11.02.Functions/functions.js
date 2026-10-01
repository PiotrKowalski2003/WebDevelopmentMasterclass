// Creating & Calling Functions
function getSomething(){
    console.log("moveRight");
    console.log("moveLeft");
}

getSomething();

// Parameters & Arguments
function getSomethingElse(steps){
    console.log("moveRight");
    console.log("moveLeft");
    console.log("Move " + steps + " steps forward");
}

getSomethingElse(15);

function lifeInWeeks(age){
    var yearsRemaining = 90 - age;
    var days = yearsRemaining * 365;
    var weeks = yearsRemaining * 52;
    var months = yearsRemaining * 12;

    console.log("\nYou have " + days + " days, " + weeks + " weeks, and " + months + "months left.");

}

lifeInWeeks(56);

// Outputs & Return Values
function bmiCalculator(weight, height){
    var bmi = weight / Math.pow(height, 2);
    return Math.round(bmi);
}

console.log(bmiCalculator(90,1.85))