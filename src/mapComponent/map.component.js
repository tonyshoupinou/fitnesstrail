import template from './map.component.html';

export const displayMapComponent = (selector) => {
    document.querySelector(selector).innerHTML = template;
};

export const onValidateStep = () => {
    
}