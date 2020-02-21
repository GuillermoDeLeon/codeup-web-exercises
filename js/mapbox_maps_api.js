
mapboxgl.accessToken = mapboxToken;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom:10,
    center:[-98.519393, 29.527616]
});


var favePlace = [ {
        name: 'Sushihana',
        address: '1810 NW Military Hwy, San Antonio, TX 78213',
        phone: '(210) 340-7808',
        // coordinates: [-98.519393, 29.527616]
    },
    {
        name: 'Little Rhein Steakhouse',
        address: '231 S Alamo St, San Antonio, TX 78205',
        phone: '(210) 225-2111',
        // coordinates: [-98.4902443, 29.4219491]
    },
    {
        name: 'Paco\'s Tacos',
        address: '1304 E 51st St, Austin, TX 78723',
        phone: '(512) 323-6206',
    }
];

favePlace.forEach(function (restaurant) {
    geoPin(restaurant);
});

function geoPin(input) {
    geocode(input.address, mapboxToken).then(function (result) {

        var popup = new mapboxgl.Popup()
            .setHTML('<p>' + input.name + '</p>' + input.phone + '<br>' + input.address);

        var marker = new mapboxgl.Marker()
            .setLngLat(result)
            .setPopup(popup)
            .addTo(map);
    });
}


