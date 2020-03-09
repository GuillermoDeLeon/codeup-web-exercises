"use strict";

mapboxgl.accessToken = mapboxToken;

// initialize load of map to San Antonio
getWeather(29.433468,-98.499370);

//Takes in the longitude/latitude values manually submitted by end user
$('#long-lat-btn').click(function (event) { //id for the submit button which captures the latitude and longitude input
    event.preventDefault();
    var lati = $('#lat').val(); //assign latitude value to local var lati
    var longi = $('#long').val(); //assign longitude value to local var longi

    //pass the local variable for latitude and longitude as arguments to the getWeather function
    getWeather(lati, longi);
});

function getWeather(lati, longi) {
    "in get weather";
    $.ajax("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/" + lati + "," + longi).done(function (data) {
        // $.ajax("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/"+ darkSkyKey +"/29.424349,-98.491142").done(function (data) {
        console.log(data);
        console.log(new Date(data.currently.time * 1000));

        var displayForecast = "";

        // Display the current "real time" temperature information to the weather-details div
        $('#weather-right-now').html('<p>' + "Current Weather:  " + data.currently.summary + '<br>' +
            "<img src='" + weatherIcon(iconArray, data.currently.icon) + "'>" + '<br>' +
            "Current Temperature:  " + data.currently.temperature.toFixed(0) + '&deg' + '<br>' +
            "Humidity:  " + data.currently.humidity + "  " +
            "Pressure:  " + data.currently.pressure + '<br>' +

            "Current Time: " + new Date(data.currently.time * 1000) + '</p>');

        // Display the current city by timezone label to the first h2 on page
        $('.city').html("Current weather in " + data.timezone);

        for (var i=0; i <= 2; i++) {
            displayForecast += '<div class="card" >';
            // displayForecast += '<img class="card-img-top" src=' + weatherIcon(iconArray, data.daily.data[i].icon) + '>';
            displayForecast += "Summary:  " + data.daily.data[i].summary + '<br>';
            displayForecast += "<img src='" + weatherIcon(iconArray, data.daily.data[i].icon) + "'>";
            displayForecast += "Temperature Low:  " + data.daily.data[i].temperatureLow.toFixed(0) + '&deg' + "/" +  " High: " + data.daily.data[i].temperatureHigh.toFixed(0) + '&deg' + '<br>';
            displayForecast += "Humidity:  " + data.daily.data[i].humidity + '<br>';
            displayForecast += "Pressure:  " + data.daily.data[i].pressure;
            displayForecast += '</div>';
        }
        //display forecast gathered from the loop above to page
        $('#weather-forecast').html(displayForecast)

    }); //end of ajax call

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 10,
        center:[longi, lati]
    });

    // Pulled some of the draggable code from the Mapbox documentation on this site -- https://docs.mapbox.com/mapbox-gl-js/example/drag-a-marker/
    var marker = new mapboxgl.Marker({
        draggable: true
    })

    .setLngLat([longi, lati])
    .addTo(map);

    function onDragEnd() {
        var lngLat = marker.getLngLat();

        //pass the coordinates from marker on map to getWeather function
        getWeather(lngLat.lat, lngLat.lng);
    }
    marker.on('dragend', onDragEnd);

    // icon array
    var iconArray = [{
            link: "img/weather-icons/static/day.svg",
            name: "clear-day"
        },
        {
            link: "img/weather-icons/static/night.svg",
            name: "clear-night"
        },
        {
            link: "img/weather-icons/static/rainy-6.svg",
            name: "rain"
        },
        {
            link: "img/weather-icons/static/cloudy.svg",
            name: "cloudy"
        },
        {
            link: "img/weather-icons/static/cloudy-day-3.svg",
            name: "partly-cloudy-day"
        },
        {
            link: "img/weather-icons/static/cloudy-night-3.svg",
            name: "party-cloudy-night"
        }
        ];

    // function to change icons
    function weatherIcon(icon, apiIcon) {
        for (var i = 0; i < iconArray.length; i++) {
            if (iconArray[i].name === apiIcon) {
                return iconArray[i].link
            }
        }
    }

}