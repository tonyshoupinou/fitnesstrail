import template from './map.component.html';
import { displayMap } from './map';

export const displayMapComponent = (selector) => {
    document.querySelector(selector).innerHTML = template;
    displayMap();
};

export const onValidateStep = () => {
    const toto = document.querySelector('.toto');

    toto.onclick = () => {
        console.log("ok");
    }
}