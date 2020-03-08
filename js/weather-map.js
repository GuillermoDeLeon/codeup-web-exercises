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
            "Temperature:  " + data.currently.temperature + "  " +
            "Humidity:  " + data.currently.humidity + "  " +
            "Pressure:  " + data.currently.pressure + '<br>' +

            "Current Time: " + new Date(data.currently.time * 1000) + '</p>');

        // Display the current city by timezone label to the first h2 in body
        $('.city').html("Current weather in " + data.timezone);

        for (var i=0; i <= 2; i++) {
            displayForecast += '<div class="card" >';
            displayForecast += "Summary:  " + data.daily.data[i].summary + '<br>';
            displayForecast += "Temperature Low:  " + data.daily.data[i].temperatureLow + " High: " + data.daily.data[i].temperatureHigh + '<br>';
            displayForecast += "Humidity:  " + data.daily.data[i].humidity + '<br>';
            displayForecast += "Pressure:  " + data.daily.data[i].pressure;
            displayForecast += '</div>';
        }

        $('#weather-forecast').html(displayForecast)

    }); //end of getWeather function

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
}

