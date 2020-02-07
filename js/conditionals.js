"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */


// var willParticipate = confirm("Would you like to enter a number?");
//
// //This first if statement checks to see if user's response is 'OK' to enter a number.  If user clicked 'OK' this will continue.  If not, it will jump to the end
// if(willParticipate) {
//     var userNumber = Number(prompt("Please enter your number?"));
//     //This if statement verified if userNumber is an actual number.  If it is, it will continue, otherwise it will jump to the alert at the bottom notifying user the input is not a number.
//     if (!isNaN(userNumber)) {
//         if (userNumber % 2 === 0) {
//             alert("The number you entered " + userNumber + " is an even number");
//         } else {
//             alert("The number you entered, " + userNumber + " is an odd number");
//         }
//         var add100 = 100 + userNumber;
//         alert("By adding 100 to your number " + userNumber + " we get the following number: " + add100);
//         if (userNumber >= 0) {
//             alert("The number " + userNumber + " is a positive number");
//         } else {
//             alert("The number " + userNumber + " is a negative number");
//         }
//     } else {
//         alert("Sorry.  " + userNumber + " is not a number.  Refresh your page and try again.")
//     }
// } else {
//     alert("That's ok. Come back when  you are ready to enter a number");
// }



/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// function analyzeColor(input) {
//     if(input.toLowerCase() === 'blue') {
//         alert("blue is the color of the sky");
//     } else if(input.toLowerCase() === 'red') {
//         alert("Strawberries are red");
//     } else if(input.toLowerCase() === 'cyan') {
//         alert("I don't know anything about cyan");
//     } else {
//         alert("Sorry, but I don't recognize the color you entered");
//     }
// }
//
// analyzeColor('blue');
// analyzeColor('red');
// analyzeColor('cyan');
// analyzeColor('white');

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// function displayColor(blah) {
//     console.log(blah);
// }
//
// displayColor(randomColor);

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

// switch(randomColor) {
//     case 'red':
//         console.log('red like ruby slippers');
//         break;
//     case 'orange':
//         console.log('orange like the stuff they put in juice');
//         break;
//     case 'yellow':
//         console.log('yellow like the sunny sun sun');
//         break;
//     case 'green':
//         console.log('green like the color of money');
//         break;
//     case 'blue':
//         console.log('blue like the water of the ocean');
//         break;
//     case 'indigo':
//         console.log('indigo like... well like the color between blue and purple');
//         break;
//     case 'violet':
//         console.log('violet like some other bluish, purplish color... i think');
//         break;
//     default:
//         console.log('this is not a color or it\'s not on the list of colors provided');
//         break;

// }




/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// var userInput = prompt("Please enter your favorite color.  If you don't have a favorite, enter any color:");
//
// analyzeColor(userInput);
//
// function analyzeColor(input) {
//     return alert("I see that you entered the color " + input);
// }


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// function calculateTotal(num, total) {
//     var discountedPrice = 0;
//     if(num === 0) {
//         discountedPrice = total;
//     } else if (num === 1) {
//         discountedPrice = total - (.10 * total);
//     } else if (num === 2) {
//         discountedPrice = total - (.25 * total);
//     } else if (num === 3) {
//         discountedPrice = total - (.35 * total);
//     } else if (num === 4) {
//         discountedPrice = total - (.5 * total);
//     } else if (num === 5) {
//         discountedPrice = 0;
//     }
//     return alert(discountedPrice);
// }
//
// calculateTotal(0, 100) // returns 100
// calculateTotal(4, 100) // returns 50
// calculateTotal(5, 100) // returns 0
//
// calculateTotal(1, 100);
// calculateTotal(2, 100);


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var userBill = Number(prompt("What was the total of your bill?"));
var billAfterDiscount = calculateTotal(luckyNumber, userBill);

alert("Your lucky number was " + luckyNumber);
alert("Your total bill before discount was $" + userBill);
alert("Your total bill after the discount is $" + billAfterDiscount);



function calculateTotal(num, total) {
    var discountedPrice = 0;
    if(num === 0) {
        discountedPrice = total;
    } else if (num === 1) {
        discountedPrice = total - (.10 * total);
    } else if (num === 2) {
        discountedPrice = total - (.25 * total);
    } else if (num === 3) {
        discountedPrice = total - (.35 * total);
    } else if (num === 4) {
        discountedPrice = total - (.5 * total);
    } else if (num === 5) {
        discountedPrice = 0;
    }
    return (discountedPrice);
}
