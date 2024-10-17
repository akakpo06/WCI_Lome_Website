
let church_position = [6.164320154792514, 1.2458787516450673];

// Creating the map
let map = L.map('map').setView(church_position, 18);

// Add auth method after deployment
// rappelle toi d'enlever la clé api et d'ajouter plutot le domaine dans stadia ............
L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png?api_key=28d9afc4-6cf3-43b6-bd03-90250bf6612e', {
    maxZoom: 20,
    attribution: '&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>',
}).addTo(map);

// Creating and adding marker on the map and binding popup to show location name
let marker = L.marker([6.164320154792514, 1.2458787516450673]).addTo(map);
marker.bindPopup("<b>Winners Chapel international Lomé-TOGO</b>").openPopup();

let locate = document.getElementById("locate_button");

locate.addEventListener("click", function () {
    
    // postion getter here .....
    let userPos =  findCells(map);
    // map.setView([userPos.coords.latitude, userPos.coords.longitude], 18);
})