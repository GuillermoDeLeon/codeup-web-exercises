"use strict";

$(document).ready(function() {  //beginning of JQuery ready
    var kcodeArr = 'u u d d l r l r b a';
    var codeArray = [];

    $('html').keydown(function(e) { //this will capture any 'keydown' event on any part of the browser page - in this case it will be specific to capturing arrow inputs
        var arrowDirection = e.which;
        console.log(arrowDirection);

        switch(arrowDirection) {
            case 37:
                $("#key-pressed").html("left arrow");
                codeArray.push("l");
                break;
            case 38:
                $("#key-pressed").html("up arrow");
                codeArray.push("u");
                break;
            case 39:
                $("#key-pressed").html("right arrow");
                codeArray.push("r");
                break;
            case 40:
                $("#key-pressed").html("down arrow");
                codeArray.push("d");
                break;
            case 66:
                $("#key-pressed").html("B");
                codeArray.push("b");
                break;
            case 65:
                $("#key-pressed").html("A");
                codeArray.push("a");
                break;
            case 13:
                $("#key-pressed").html("enter");
                codeArray.push("enter");
                break;
            default:
                $("#key-pressed").html("This is not a valid input!");
        }
        $("#code-input").html(codeArray);
        console.log(codeArray.join(','));

    });

});  // end of JQuery ready
