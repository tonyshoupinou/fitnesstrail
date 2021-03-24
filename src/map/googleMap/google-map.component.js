import { MapService } from "../../shared/services/map.service";
// import { initMap } from "./initMap";

export class GoogleMapComponent {

  constructor(selector) {
    this.selector = selector;
    this.display();
  }

  display() {
    const body = document.querySelector(this.selector);
    const script = document.createElement('script');

    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyD21vP4lQ5LA5g_GrU0ivkXLUMO0BIKz2s';
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;

    // script.onload = initMap();
    script.onload = MapService.getMap()
      .then(() => {
        console.log("Map is loaded");
      })
      .catch((e) => {
        console.log(`erreur on load ${e}`);
      });
    
    script.onerror = () => {
      console.log("error");
    }

    body.appendChild(script);
  }
}
