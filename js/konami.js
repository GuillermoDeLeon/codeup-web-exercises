"use strict";

$(document).ready(function() {  //beginning of document ready
    var konamiCodeArray = ['u','u','d','d','l','r','l','r','b','a','enter'];
    var bucketArray = [];
    var ctr = 0;

    $("button").click(function(){
        var imageUrl = "img/konami/contra-background.png";
        $(".box").css("background-image", "url(" + imageUrl + ")");
    });

    $('html').keyup(function(e) { //this will capture any 'keyup' event on any part of the browser page
        var userInput = e.which;
        console.log(userInput);

        switch(userInput) {
            case 37:
                $("#key-pressed").html("").prepend($('<img>',{id:'#key-pressed',src:'img/konami/left-arrow.png'}));
                bucketArray.push("l");
                break;
            case 38:
                $("#key-pressed").html("").prepend($('<img>',{id:'#key-pressed',src:'img/konami/up-arrow.png'}));
                bucketArray.push("u");
                break;
            case 39:
                $("#key-pressed").html("").prepend($('<img>',{id:'#key-pressed',src:'img/konami/right-arrow.png'}));
                bucketArray.push("r");
                break;
            case 40:
                $("#key-pressed").html("").prepend($('<img>',{id:'#key-pressed',src:'img/konami/down-arrow.png'}));
                bucketArray.push("d");
                break;
            case 66:
                $("#key-pressed").html("").prepend($('<img>',{id:'#key-pressed',src:'img/konami/letter-b.png'}));
                bucketArray.push("b");
                break;
            case 65:
                $("#key-pressed").html("").prepend($('<img>',{id:'#key-pressed',src:'img/konami/letter-a.png'}));
                bucketArray.push("a");
                break;
            case 13:
                $("#key-pressed").html("").prepend($('<img>',{id:'#key-pressed',src:'img/konami/return-arrow.png'}));
                bucketArray.push("enter");
                break;
            default:
                $("#key-pressed").html("This is NOT valid input!");
        }
    //stores valid keys pressed by user in an array and also displays the stored keystrokes on the browser page using JQuery
        $("#keys-captured").html(bucketArray + '  ');

    //will compare the keys pressed by user with the actual Konami code.  If the code entered by user matches the correct Konami code, then alert will launch.
        if (bucketArray.length === konamiCodeArray.length) {
            if(JSON.stringify(bucketArray) === JSON.stringify(konamiCodeArray)) {
                alert('You have added 30 lives!');
                return console.log(true);
            } else {
                alert('The code you entered is NOT CORRECT!');
                return console.log(false);
            }
        }
        ctr++;
    });
});  // end of document ready