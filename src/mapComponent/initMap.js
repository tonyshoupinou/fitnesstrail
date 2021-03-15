import { myPosition } from "./watchPosition";

let marker = null;
let geoLoc;
let watchID;

export const initMap = () => {
    const showPosition = (position) => {
      let coords = { lat: position.coords.latitude, lng: position.coords.longitude};

      const map = new google.maps.Map(document.querySelector(".display-map"), {
        zoom: 15,
        center: coords,
      });
  
      marker = new google.maps.Marker({
        position: coords,
        map: map,

        // recentrer carte et evoluer position marker
      });

      let options = {enableHighAccuracy: true};
      geoLoc = navigator.geolocation;
      watchID = geoLoc.watchPosition(showLocation, errorHandler, options);
    }

    const showLocation = (position) => {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      alert("Latitude : " + latitude + " Longitude: " + longitude);
    }
    
    const errorHandler = (err) => {
      if(err.code == 1) {
          alert("Error: Access is denied!");
      } else if( err.code == 2) {
          alert("Error: Position is unavailable!");
      }
    }
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      map.innerHTML = "Geolocation is not supported by this browser.";
    }

}
  