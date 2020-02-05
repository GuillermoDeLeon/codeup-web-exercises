console.log("Hello from external JavaScript");

// alert('Welcome to my Website!');



//Exercise 3.1

// var userInput = prompt('What is your favorite color?');
// alert('Ah, I see your favorite color is ' + userInput  +'.' + ' That is my favorite color too.');

// var dailyRentalprice = 3;
// var movieRentalTotalCost = 0;
//
// var daysRentedMovie1 = Number(prompt('How many days did you rent the Little Mermaid for?'));
// var daysRentedMovie2 = Number(prompt('How many days did you rent Brother Bear for?'));
// var daysRentedMovie3 = Number(prompt('How many days did you rent Hercules for?'));
//
// movieRentalTotalCost = dailyRentalprice * (daysRentedMovie1 + daysRentedMovie2 + daysRentedMovie3);
//
// alert('The cost to rent all 3 movies will be ' + '$ ' + movieRentalTotalCost);


//Exercise 3.2
// const googlePay = 400;
// const amazonPay = 380;
// const fbPay = 350;
//
// var weeklyTotalPay = 0;
//
// var googleHoursWorked = Number(prompt('How many hours did you work for Google this week?'));
// var amazonHoursWorked = Number(prompt('How many hours did you work for Amazon this week?'));
// var fbHoursWorked = Number(prompt('How many hours did you work for Facebook this week?'));
//
//
// weeklyTotalPay = (googleHoursWorked * googlePay) + (amazonHoursWorked * amazonPay) + (fbHoursWorked * fbPay);
//
// alert("Your total pay this week was $ " + weeklyTotalPay);

//Exercise 3.3

// var isClassFull;
// var scheduleConflict;
//
// var responseScheduleConflict = prompt('Does the class you want to sign up for take place at the same time as any of your current classes?  1 - yes; 2 - no');
// var responseisClassFull = prompt('Is the class you are wanting to take already full? 1 - yes; 2 - no');
//
// console.log(responseScheduleConflict);



// if (responseScheduleConflict = 'yes') {
//     scheduleConflict = true; }
// else {
//     scheduleConflict = false; }
//
// if (responseisClassFull = 'yes') {
//     isClassFull = true; }
// else {
//     isClassFull = false; }
//
// if (isClassFull || scheduleConflict = true) {
//     alert("I am sorry, but either the class you want to take is full or conflicts with your current schedule.");
// }
// else {
//     alert("Great! The class is not full and there are no scheduling conflicts");
// }

var classIsNotFull = confirm("Class is not full");
var noScheduleConflicts = confirm("Schedules do not conflict");

var studentEnrolled = classIsNotFull && noScheduleConflicts;
alert("Student can enroll: " + studentEnrolled);


// Exercise 3.4

// var itemsPurchased;
// var isOfferExpired;
// var isPremiumMember;
//
// itemsPurchased = Number(prompt('How many items did you purchase?'));
// isOfferExpired = Number(prompt('Is your offer expired? 0 - no; 1 - yes'));
// isPremiumMember = Number(prompt('Are you a premium member? 0 - no; 1 - yes'));
//
// console.log(itemsPurchased);
// console.log(isOfferExpired);
// console.log(isPremiumMember);
//
// if ((isPremiumMember == 1 || itemsPurchased > 2) && isOfferExpired == 0) {
//     alert("You are either a Premium member or have purchased more than 2 products; You have an offer that is not expired");
// }
// else {
//     alert("You either have not purchased more than 2 items or are not a Premium member; You may also have an EXPIRED offer.");
// }