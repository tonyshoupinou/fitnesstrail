import { myPosition } from "./watchPosition";

let marker = null;
// let geoLoc;
// let watchID;

export const initMap = () => {
    // const showPosition = (position) => {
    //   let coords = { lat: position.coords.latitude, lng: position.coords.longitude};

    //   let map = new google.maps.Map(document.querySelector(".display-map"), {
    //     zoom: 15,
    //     center: coords,
    //   });
  
    //   marker = new google.maps.Marker({
    //     position: coords,
    //     map: map,
    //   });

      // let options = {enableHighAccuracy: true};
      // geoLoc = navigator.geolocation;
      // watchID = geoLoc.watchPosition(showLocation, errorHandler, options);
    // }

    // const showLocation = (position) => {
    //   // var latitude = position.coords.latitude;
    //   // var longitude = position.coords.longitude;
    //   // alert("Latitude : " + latitude + " Longitude: " + longitude);
    //   let coords = { lat: position.coords.latitude, lng: position.coords.longitude};
      
    //   alert("Latitude : " + position.coords.latitude + " Longitude: " + position.coords.longitude);
    //   console.log(watchID)
    //   let map = new google.maps.Map(document.querySelector(".display-map"), {
    //     zoom: 15,
    //     center: coords,
    //   });
    //   marker = new google.maps.Marker({
    //     position: coords,
    //     map: map,
    //   });
    // }
    
    // const errorHandler = (err) => {
    //   if(err.code == 1) {
    //       alert("Error: Access is denied!");
    //   } else if( err.code == 2) {
    //       alert("Error: Position is unavailable!");
    //   }
    // }
    
    // if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(showPosition);
    // } else {
    //   map.innerHTML = "Geolocation is not supported by this browser.";
    // }

  // const coords = [];

  if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        position => {
          let coords = { lat: position.coords.latitude, lng: position.coords.longitude};
          console.log(coords)

          let map = new google.maps.Map(document.querySelector(".display-map"), {
            zoom: 20,
            center: coords,
          });
      
          marker = new google.maps.Marker({
            position: coords,
            map: map,
          });
        },
        error => console.log(error),
        {
          enableHighAccuracy: true
        });
  } else {
    map.innerHTML = "Geolocation is not supported by this browser.";
  }

}
  