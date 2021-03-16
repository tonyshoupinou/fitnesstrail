import { displayModalComponent } from '../shared/modals/modals';
import html from './trailselect.html';
import { Loader } from "@googlemaps/js-api-loader"


export const displayTrailSelectComponent = (selector) => {
    document.querySelector(selector).innerHTML = html;
};
export const clicButtonParcours1 = () => {
    const btnp1 = document.querySelector('.buttonparcours1'); 
    btnp1.onclick = (e) => {
        e.preventDefault();
        const toto = btnp1.getAttribute("href").substring(1)
        displayModalComponent(toto);
    };
};
export const clicButtonParcours2 = () => {
    const btnp2 = document.querySelector('.buttonparcours2');
    btnp2.onclick = (e) => {
        e.preventDefault();
        const toto = btnp2.getAttribute("href").substring(1)
        displayModalComponent(toto);
    };
};
export const clicButtonParcours3 = () => {
    const btnp3 = document.querySelector('.buttonparcours3'); 
    btnp3.onclick = (e) => {
        e.preventDefault();
        const toto = btnp3.getAttribute("href").substring(1);
        displayModalComponent(toto);
    };
};