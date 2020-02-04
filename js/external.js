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

var isClassFull = false;
var scheduleConflict = false;

var responseScheduleConflict = prompt('Does the class you want to sign up for take place at the same time as any of your current classes?');
var responseisClassFull = prompt('Is the class you are wanting to take already full?');
