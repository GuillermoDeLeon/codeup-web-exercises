"use strict";

var userInput = prompt("Please enter an ODD number between 1 and 50:");
while (userInput % 2 === 0) {
    alert("Sorry, but " + userInput + " is not an ODD number.");
    userInput = prompt("Please try again and enter an ODD number between 1 and 50");
}

console.log("Number to skip is: " + userInput);

for (var i=1; i < 50; i+=2) {
    if (i === Number(userInput)) {
        console.log("Yikes! Skipping number: " + userInput);
        continue;
    } else {
        console.log("Here is an odd number: " + i);
    }
}

