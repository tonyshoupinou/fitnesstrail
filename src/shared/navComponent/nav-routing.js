import { displayHomeComponent } from "../../home/home";
import { displayMapComponent } from "../../mapComponent/map.component";
import { displayTrailSelectComponent } from "../../trailselect/trailselect";
export const navRouting = () => {
    
    const homeLink = document.querySelector('.home-link');
    const logoLink = document.querySelector('.logo-link');
    const selectLink = document.querySelector('.select-link');
    const mapLink = document.querySelector('.map-link');
    homeLink.onclick = (e) => {
        e.preventDefault();
        displayHomeComponent('main');
    }
    logoLink.onclick = (e) => {
        e.preventDefault();
        displayHomeComponent('main');
    }
    selectLink.onclick = (e) => {
        e.preventDefault();
        displayTrailSelectComponent('main');
    }
    mapLink.onclick = (e) => {
        e.preventDefault();
        displayMapComponent('main');
    }
}