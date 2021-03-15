import { initMap } from "./initMap";

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
