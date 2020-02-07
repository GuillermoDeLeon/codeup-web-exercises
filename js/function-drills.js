"use strict";

//Make a function named isOdd(number)

// function isOdd(num) {
//     var result;
//     result = num % 2 != 0;
//     return console.log(result);
// }
//
// isOdd(1);
// isOdd(2);
// isOdd(3);

//Make a function named isEven(number)

// function isEven(num) {
//     var result;
//     result = num % 2 === 0;
//     return console.log(result);
// }
//
// isEven(2);
// isEven(4);
// isEven(5);

//Make a function named identity(input) that returns the input exactly as provided.

// function identity(input) {
//     return console.log(input);
// }
//
// identity("willie");
// identity(42);

// function isFive(num) {
//     var result = num === 5;
//     return console.log(result);
// }
//
// isFive(5);
// isFive(6);
// isFive(10);

//Make a function named addFive(input) that adds five to some input.
// function addFive(input) {
// var result = input + 5;
// console.log(result);
// }
//
// addFive(1);
// addFive(2);
// addFive(10);
//
// //Make a function named isMultipleOfFive(input)
//
// function isMultipleOfFive(input) {
//     var result;
//     result = (input % 5) === 0;
//     return console.log(result);
// }
//
// isMultipleOfFive(5);
// isMultipleOfFive(10);
// isMultipleOfFive(11);

// Make a function named isThree(input)
// function isThree(input) {
//     var result;
//     result = input === 3;
//     return console.log(result);
// }
//
// isThree(1);
// isThree(3);
// isThree(6);

//Make a function named isMultipleOfThree(input)
// function isMultipleOfThree(input) {
//     var result;
//     result = input%3 === 0;
//     console.log(result);
// }
//
// isMultipleOfThree(3);
// isMultipleOfThree(6);
// isMultipleOfThree(10);

//Make a function named isMultipleOfThreeAndFive(input)
// function isMultipleOfThreeAndFive(input) {
//     var result;
//     result = input%3 === 0 && input%5 === 0;
//     return console.log(result);
// }
//
// isMultipleOfThreeAndFive(3);
// isMultipleOfThreeAndFive(5);
// isMultipleOfThreeAndFive(15);

//Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n
// function isMultipleOf(target, n) {
//     var result;
//     result = target%n === 0;
//     return console.log(result);
// }
//
// isMultipleOf(50, 5);
// isMultipleOf(75, 25);
// isMultipleOf(50, 3);

//Make a function named isTrue(boolean)
// function isTrue(input) {
//
//     return console.log(Boolean(input));
// }
//
// isTrue("0");
// isTrue(1);
// isTrue(true);
// isTrue(false);

// Make a function named isFalse(boolean)
// function isFalse(boolean) {
//     return console.log(Boolean(boolean));
// }
//
// isFalse(false);
// isFalse(0);

// Make a function named isVowel(letter)
// Found similar solution here --> https://stackoverflow.com/questions/5488028/how-do-i-check-for-vowels-in-javascript
function isVowel(letter) {
    var vowels = ['a','e','i','o','u','A','E','I','O','U'];
    var result = vowels.indexOf(letter) !== -1;
    if (result === true) {
        return console.log(letter + ' is a vowel') }
    else {
        return console.log(letter + ' is not a vowel')}
}
//
// isVowel('a');
// isVowel('b');
// isVowel('E');

//Make a function named isConsonant(letter)
// function isConsonant(letter) {
//     var vowels = ['a','e','i','o','u','A','E','I','O','U'];
//     var result = vowels.indexOf(letter) !== -1;
//     if (result === false) {
//         return console.log(letter + ' is a consonant') }
//     else {
//         return console.log(letter + ' is not a consonant')}
// }
// function isConsonant(letter) {
//     return !isVowel(letter)
// }
// isConsonant('a');
// isConsonant('b');
// isConsonant('E');
// isConsonant('C');
// isConsonant("45");

//Make a function named isCapital(letter)
// function isCapital(letter) {
//  var result;
//  result = letter === letter.toUpperCase();
//  console.log(result);
// }
//
// isCapital('A');
// isCapital('a');
// isCapital('B');
// isCapital('b');

// Make a function named isLowerCase(letter)
