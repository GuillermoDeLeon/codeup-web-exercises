"use strict";

$(document).ready(function() {

//     alert($('h1').html());
// // alert('this page is loading, from js file')
//     // INSERT JAVASCRIPT CODE SAMPLE HERE
//     $('#div1').css('background-color', '#FF0');
//     $('#div2').css('background-color', 'blue');
//
//     alert($('h4').html());

    // $('#paragraph1').dblclick(function(e) {
    //     font-size: 18px;
    // });

    $('h1').click(function() {
        $(this).css('background-color', 'yellow');
    });

    $('p').dblclick(function() {
        $('p').css('font-size', '28px');
    });

    // $('li').hover(
    //     function() {
    //         $(this).css('color', 'red');
    //     },
    //     function() {
    //         $(this).css('color', '#000');
    //     }
    // );

    $('li').hover(function() {
            $('li').css('color', 'red');
        },
        function() {
            $('li').css('color', '#000');
        }
    );

});