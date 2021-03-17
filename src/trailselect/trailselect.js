import { displayModalComponent } from '../shared/modals/modals';
import htmltrailselect from './trailselect.html';
// import { Loader } from "@googlemaps/js-api-loader"

export const displayTrailSelectComponent = (selector) => {
    document.querySelector(selector).innerHTML = htmltrailselect;
    
    const toto2 = document.querySelectorAll('.buttonparcours');
    toto2.forEach( (btnSelectparcours) => {
        btnSelectparcours.onclick = (e) => {
            e.preventDefault();
            const toto = btnSelectparcours.getAttribute("href").substring(1);
            displayModalComponent(toto);
        }
    })
};