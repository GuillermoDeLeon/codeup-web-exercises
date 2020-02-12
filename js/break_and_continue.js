"use strict";

// var userInput = prompt("Please enter an ODD number between 1 and 50:");
// while (userInput % 2 === 0) {
//     alert("Sorry, but " + userInput + " is not an ODD number.");
//     userInput = prompt("Please try again and enter an ODD number between 1 and 50");
// }

do {
    var userInput = prompt("Please enter an ODD number between 1 and 50:");
    if (userInput%2 === 1) {
        break;
    } else {
        alert("Sorry, but " + userInput + " is not an odd number.  Please try again.");
    }

} while ((userInput % 2 === 0) )

console.log("Number to skip is: " + userInput);

for (var i=1; i < 50; i+=2) {
    if (i === Number(userInput)) {
        console.log("Yikes! Skipping number: " + userInput);
        continue;
    } else {  // this else is actually not needed since I am using "continue" on the line before
        console.log("Here is an odd number: " + i);
    }
}

