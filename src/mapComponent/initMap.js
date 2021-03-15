import { myPosition } from "./watchPosition";

export const initMap = () => {
    const showPosition = (position) => {
      let coords = { lat: position.coords.latitude, lng: position.coords.longitude};
      const map = new google.maps.Map(document.querySelector(".display-map"), {
        zoom: 15,
        center: coords,
      });
  
      const marker = new google.maps.Marker({
        position: coords,
        map: map,
      });
    }
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        const id = navigator.geolocation.watchPosition(position => {
            console.log(position)

        })
        console.log(id)
    } else {
      map.innerHTML = "Geolocation is not supported by this browser.";
    }

}
  