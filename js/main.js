"use strict"

// function renderCoffee(coffee) {
//     var html = '<tr class="coffee">';
//     html += '<td>' + coffee.id + '</td>';
//     html += '<td>' + coffee.name + '</td>';
//     html += '<td>' + coffee.roast + '</td>';
//     html += '</tr>';
//
//     return html;
// }

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    // html += '<div>' + coffee.id + '</div';
    html += '<h3>' + coffee.name + '</h3>' + " " + '<p>' + coffee.roast + '</p>';
    // html += '<div>' + 'Roast Type:' + '<p>' + coffee.roast + '</p></div>';
    html += '</div>';
    return html;
}

// function renderCoffees(coffees) {
//     var html = '';
//     for(var i = coffees.length - 1; i >= 0; i--) {
//         html += renderCoffee(coffees[i]);
//     }
//     return html;
// }

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast || selectedRoast === "all") {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function addToCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var addCoffeeName = document.querySelector('#add-coffee-name').value;
    var addCoffeeRoast = document.querySelector('#add-coffee-roast').value;
    coffees.push({
        id: coffees.length + 1,
        name: addCoffeeName,
        roast: addCoffeeRoast
    });
    localStorage.setItem('coffees', JSON.stringify(coffees));
    coffeesArray = JSON.parse(localStorage.getItem('coffees'));
    tbody.innerHTML = renderCoffees(coffeesArray);
}

//this function was added to work with user input when searching for coffee by typing into search field.  captures input with "coffee-input" id.
function chooseCoffee() {
    var html = "";
    for (var i = 0; i < coffees.length; i++) {
        if (coffees[i].name.toLowerCase().includes(document.getElementById("coffee-input").value.toLowerCase())) {
            console.log(coffees.name);
            html = html + renderCoffee(coffees[i]);
        }
        tbody.innerHTML = html;
    }
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

//this auto selects the coffees that show up on page as user types letter at a time
document.getElementById("coffee-input").addEventListener("keyup", chooseCoffee);

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);