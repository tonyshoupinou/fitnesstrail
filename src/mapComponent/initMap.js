export const initMap = () => {
  const successCallback = (position) => {
    let coords = { lat: position.coords.latitude, lng: position.coords.longitude};
    console.log(coords);

    let map = new google.maps.Map(document.querySelector(".display-map"), {
      zoom: 15,
      center: coords,
    });

    let marker = new google.maps.Marker({
      position: coords,
      map: map,
    });
  };

  const errorCallback = (error) => {
    console.log(error);
  };

  const options = {
    enableHighAccuracy: true
  };

  if (navigator.geolocation) {
    const watchId = navigator.geolocation.watchPosition(successCallback, errorCallback, options)
  } else {
    map.innerHTML = "Geolocation is not supported by this browser.";
  }
}
  