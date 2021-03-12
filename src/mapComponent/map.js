export const displayMap = () => {
  const body = document.querySelector('body');
  const script = document.createElement('script');

  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyD21vP4lQ5LA5g_GrU0ivkXLUMO0BIKz2s';
  script.type = 'text/javascript';
  script.async = true;
  script.defer = true;

  script.onload = initMap;
  body.appendChild(script);
}

const initMap = () => {
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
  } else {
    map.innerHTML = "Geolocation is not supported by this browser.";
  }
}
