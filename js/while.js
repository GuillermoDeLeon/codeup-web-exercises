"use strict";

// Loops Exercise 2
// var i = 2;
// while (i <= 65536) {
//     console.log(i);
//     i = i*2;  // i*-= 2;
// }

//Loops Exercise 3

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
console.log("Number of cones to sell " + allCones);

var totalConesSold = 0;
var conesRemaining = allCones;

do {
    var conesSold = Math.floor(Math.random() * 5) + 1;     // This expression will generate a random number between 1 and 5
    if (conesSold > conesRemaining) {
        console.log("Cannot sell you " + conesSold + " I only have " + conesRemaining + "...");
        continue;
    }  else {
    console.log(conesSold + " cone(s) sold...");
    totalConesSold = conesSold + totalConesSold;
    console.log(totalConesSold + " total cone(s) sold");
    conesRemaining = allCones - totalConesSold;
    console.log(conesRemaining + " cone(s) remaining");
    }

} while (totalConesSold < allCones);

console.log("Yay! I sold them all!");

