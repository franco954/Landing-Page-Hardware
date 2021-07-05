

/* activar componentes materialize con jquery */


$(document).ready(function () {
    $('.sidenav').sidenav();
});


$(document).ready(function () {
    $('select').formSelect();
});



/* api map */


const mymap = L.map('map').setView([-34.635071, -58.4477424, 17.75], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);


L.marker([-34.635071, -58.4477424, 17.75]).addTo(mymap)
    .bindPopup('Parque Chacabuco')
    .openPopup();

