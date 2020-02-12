"use strict";
// Loop Exercise 2

// function showMultiplicationTable(num) {
//     for(var i = 1; i <= 10; i++) {
//         console.log(num + " x " + i + " = " + (num*i));
//     }
// }
//
// showMultiplicationTable(1);
//
// showMultiplicationTable(10);
// showMultiplicationTable(7);

//Loop Exercise 3

// for (var i=1; i <= 10; i++) {
//     var random = Math.floor(Math.random() * 180) + 20;
//     if (random % 2 === 1) {
//         console.log(random + " is odd");
//     } else {
//         console.log(random + " is even");
//     }
// }

//Loop Exercise 4

// for (var i=1; i < 10; i++) {
//     for (var j = 1; j<i; j++) {
//         console.log(i);
//     }
// }

// for (var i=1; i < 10; i++) {
//         var num = i.toString();
//         console.log(num.repeat(i));
// }

for(var outer = 1; outer < 10; outer++) {
        console.log("outer loop");
        var output = "";

        for (var inner = 1; inner <= outer; inner++) {
                console.log("inside inner loop");
                output += outer;
        }
        console.log(output);
}

//Loop Exercise 5

// for (var i=100; i > 0; i-=5) {
//     console.log(i);
// }

// for (var i=100; i >= 5; i-=5) {
//     console.log(i);
// }

for(var i = 100; i >= 5; i--) {
        if(i%5 === 0){
                console.log(i);
        }
}

// Bonus Challenges

// Write a function that uses a loop to console.log "99 bottles of beer on the wall" until the passed argument number. Use a break to exit the loop, and console.log the message "Aw no, we're not doing that song again," in the event the argument is a number greater than 99, or is not a number.
// Write a loop that will console.log hexadecimal numbers until it reaches 'FF'. Take a look at this stackoverflow post for information on converting decimal numbers to hexadecimal.  https://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hexadecimal-in-javascript
// Write a loop that prompts the user to confirm if they have drank water today. This loop should run until the user has confirmed the prompt (clicked yes) 6 times.