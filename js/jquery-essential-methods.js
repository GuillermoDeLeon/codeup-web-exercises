"use strict";

// .html()
//   .css()
//     .addClass()
//       .removeClass()
//         .toggleClass()


// ******* Getters and Setters **********

// Getter for text of logo color
function getColorText() {
    //will return a string inside the #colorText span
    return $('#colorText').html();
}

// console.log(getColorText());

// Setter for text of logo color
function setColorText(color) {
    //will set the text to the passed in color, and also change its CSS color
    return $('#colorText').removeClass(getColorText()).html(color).addClass(color);
}

// console.log(setColorText('purple'));

// Getter for section color
function getSectionColor(section) {
    return $(section).attr('class');
}

getSectionColor('#path1');

// Setter for the section color

function setSectionColor(color, section) {
    // change all sections if 'all' is passed in
if(section === "all") {
    resetColor();
    setColorText(color);
    return $('.codeup-logo > path').addClass(color);

    } else { //the runs if an individual section was passed, like path 1, or path 2.
    $(section).removeClass(getSectionColor(section));
    return $(section).addClass(color);
}
}

setSectionColor('purple', 'all');
setSectionColor('orange', '#path3');

    // if individual section is passed in, change its color (used for Rainbow effect)

function resetColor() {
    $('.codeup-log > path').removeClass(function() {
        return $(this).attr('class'); //$(this) <-- all the '.codeup-logo > path' elements
    });
}

// reset all path elements to default, and change the 'color' text in the h2 to 'green'


// write a function called rainbowLogo() that changes the logo to rainbow colors
function rainbowLogo() {
    var text = 'rainbow';
    var logoSections = ['#path1','#path2','#path3','#path4','#path5','#path6'];
    var colors = ['red','orange','yellow','green','blue','purple'];

    var counter = 0;

    logoSections.forEach(function(sectionId) {
        setSectionColor(colors[counter], sectionId);
        counter++;
    });
    // split up the 'rainbow' text and make it rainbow
    var colorfulText = [];

    counter = 0;
    var i = 0;

    text.split('').forEach(function(letter) {
        colorfulText.push( = '<span class="' + colors[counter] + '">' + letter + '</span>');
        if(counter === 5) {
            counter = 0;
        }
        counter++;
    });
    text = colorfulText.join(' ');
    // console.log(text);

    return $('#colorText').removeClass(getColorText()).html(text);
}

console.log(rainbowLogo());


// Set a variable called circleClickCount, to keep track of how many times an individual circle has been clicked

var circleClickCount = 0;

// Add a click listener to each of the 'circle' elements at the botto of the page, and make each color circle
$('.circle').click(function() {
    var clickedColor = $(this).attr('id');

    circleClickCount++;

    if (clickedColor === 'rainbow') {
        console.log('rainbow was clicked');
        resetColor(); //removes all classes from path elements
        rainbowLogo(); // change all path elements to rainbow colors
    } else {
        //they clicked on a single color
        console.log(clickedColor + ' was clicked');
        setColorText(clickedColor);
        setSectionColor(clickedColor, 'all');
    }

    if ($('.codeup-logo').attr('id') === clickedColor) {
        $('#colorText').toggleClass('caps');
        console.log("clicked the same color");
    } else {
        $('#colorText').removeClass('caps');
        circleClickCount = 0;
    }

    console.log(circleClickCount);
    $('.codeup-logo').attr('id',clickedColor);
});


// change the logo to the clicked color, or rainbow, if rainbow was clicked
// If the same color is clicked twice, toggle the 'caps' class to UPPERCASE and lowercase the color name

    // change the logo to the clicked color, or rainbow, if rainbow was clicked
        // If the same color is clicked twice, toggle the 'caps' class to UPPERCASE and lowercase the color name


// *********************** Traversing Methods ********************************* //

// now let's traverse some elements

// .each()   .first()    .last()    .children()    .parent()    .next()

// TODO: Let's give each of the selection circles a 1px black border
$('.circle').each(function(index) {
    console.log("added border to circle" + index);
    return $(this).css('border', '1px solid black');
});


// TODO: Let's take the border away from the first circle
$('.circle').first


// TODO: Let's make the last circle disappear


// TODO: Find the children of the circle row, and remove borders from all of them, then unhide the last circle


// TODO: while changing the fist path element to have a black fill, give its grandparent a light gray background and 10px padding
$('#path1').removeClass().addClass('black').parent().parent().css({'background': 'lightgray', 'margin': '20px'
});

// TODO: change the second path element to blue, then change the 'next' element to yellow
$('#path2').removeClass().addClass('blue').next().removeClass().addClass('yellow');
)


// TODO: What's the difference between changing the class to change the color, and simply changing the color directly?
