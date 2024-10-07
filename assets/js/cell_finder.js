 var userPosition
function getUserLocation(map) {

    let error
    function Get_pos(position) {    
        userPosition = position;
        var marker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);
        marker.bindPopup("<b>You are here</b>").openPopup();
        userPosition =  position
        
    }
    // Geolocation error handler
    function error_handler(error) {
        console.log("Erreur de géoloc N°"+error.code+" : "+error.message);    console.log(error);
    }
     // Built-in geolocation tool to get user's location
    navigator.geolocation.getCurrentPosition(Get_pos, error, {timeout: 2000,   maximumAge: 60000 })

}

async function getCellData() {
    
    const scriptUrl = "https://script.google.com/macros/s/AKfycbx28QFV8i1i4wRb8HhRuRXQDYOTokOGwazVjExk3aBUS22ALIeTf4WpBGnNqMISoCR7/exec"
    let data = {}
    try {
        const response = await fetch(scriptUrl);
        data = await response.json();
    } 
    catch (error) {
    console.error(error);
    }
      return data
}
async function getEmbedIframe(link) {
    const url = `https://iframe.ly/api/iframely?url=${link}&key=eb8ce224448d19aa54bb5f6ccd241fac`
    let result = {}
    try {
        const response = await fetch(url)
        result = await response.json()
    } catch (error) {
        console.log(error)
    }
    return result["html"]
}

async function setCellsPosMarker(lat, lng, name, number, image) {
    if (lat === "user"){
    map.setView([userPosition.coords.latitude, userPosition.coords.longitude], 18);

    }
    else {
        let myIcon = L.icon({
            iconUrl: 'assets/images/cell_icon.png',
            shadowUrl: 'assets/images/cell_icon_shadow.png',
        
            iconSize:     [20, 55], // size of the icon
            shadowSize:   [15, 64], // size of the shadow
            iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 62],  // the same for the shadow
            popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
        });
    
    
        let mapLink = "https://www.google.com/maps/search/?api=1&query=" + lat + "," + lng 
    
        imageId = image.match(/[\w\_\-]{25,}/).toString();
        // let imageLink = "https://drive.google.com/file/d/"+imageId+"/preview"
    
        // console.log(imageId)
        let imageLink = "https://drive.google.com/file/d/1"+imageId+"/view"
        
    
    
        let imageFrame = await getEmbedIframe(image)
    
        L.marker([lat, lng]).addTo(map).bindPopup(`
        <div class="cell_info">
            <!-- <div class="img_container"> -->
                ${imageFrame}
                <!-- <img crossorigin="anonymous" src=${image} alt="map image" > -->
            </div>
            <div class="desc_container">
                <div class="name_container">
                    <span>${name}</span>
                </div>
                <div class="number_container">
                    <span><b>Cell Leader's number</b></span>
    
                    <span>
                        <a href="tel:${number}">${number}</a>
                    </span>
                </div>
                <div class="go_to_map_button">
                    <a href=${mapLink}>Go to Google Map</a>
                </div>
            </div>
        </div>`).openPopup();

    }
}


async function findCells(map) {
    let userPos = getUserLocation(map);
    let cellData = await getCellData();

    for (let i = 0; i < cellData["data"].length -1; i++) {
        const cell = cellData["data"][i];

        let coordinates = cell[2].split(", "); //create an array containing lat and lng as strings
        coordinates[0] = parseFloat(coordinates[0]); //convert lat string to number
        coordinates[1] = parseFloat(coordinates[1]); //convert lng string to number
        
        setCellsPosMarker(coordinates[0], coordinates[1], cell[0], cell[1], cell[3])
        setCellsPosMarker("user")

        
    }
    return userPosition

}