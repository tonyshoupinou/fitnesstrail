import { GoogleMapComponent } from './googleMap/google-map.component';
import template from './map.component.html';

export class MapComponent {

    constructor(selector) {
        this.selector = selector;
        this.display();
    }

    display() {
        document.querySelector(this.selector).innerHTML = template;
        this.displayGoogleMap();
    }
    
    displayGoogleMap() {
        new GoogleMapComponent('body');
    }

    displayCurrentStep() {}

    startTrail() {
        this.startTimer();
    }

    checkStatus() {}

    displayStatus() {}

    validateStep() {}

    startTimer() {}

    signalError() {}

    displayResultPage() {}
}
