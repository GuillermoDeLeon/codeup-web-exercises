"use strict";

$(document).ready(function() {  //beginning of document ready
    var konamiCodeArray = ['u','u','d','d','l','r','l','r','b','a','enter'];
    var bucketArray = [];
    var ctr = 0;

    $('html').keydown(function(e) { //this will capture any 'keydown' event on any part of the browser page
        var userInput = e.which;
        console.log(userInput);

        switch(userInput) {
            case 37:
                $("#key-pressed").html("left arrow");
                bucketArray.push("l");
                break;
            case 38:
                $("#key-pressed").html("up arrow");
                bucketArray.push("u");
                break;
            case 39:
                $("#key-pressed").html("right arrow");
                bucketArray.push("r");
                break;
            case 40:
                $("#key-pressed").html("down arrow");
                bucketArray.push("d");
                break;
            case 66:
                $("#key-pressed").html("B");
                bucketArray.push("b");
                break;
            case 65:
                $("#key-pressed").html("A");
                bucketArray.push("a");
                break;
            case 13:
                $("#key-pressed").html("enter");
                bucketArray.push("enter");
                break;
            default:
                $("#key-pressed").html("This is not a valid input!");
        }
    //stores valid keys pressed by user in an array and also displays the stored keystrokes on the browser page using JQuery
        $("#keys-captured").html(bucketArray);

    //will compare the keys pressed by user with the actual Konami code.  If the code entered by user matches the correct Konami code, then alert will launch.
        if (bucketArray.length === konamiCodeArray.length) {
            if(JSON.stringify(bucketArray) === JSON.stringify(konamiCodeArray)) {
                alert('You have added 30 lives!');
                return console.log(true);
            } else {
                return console.log(false);
            }
        }
        ctr++;
    });
});  // end of document ready
