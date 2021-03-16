import { displayHomeComponent } from "../../home/home";
import { displayMapComponent } from "../../mapComponent/map.component";
import { displayTrailSelectComponent } from "../../trailselect/trailselect";

export const navRouting = () => {
    
    const homeLink = document.querySelector('.home-link');
    const logoLink = document.querySelector('.logo-link');
    const selectLink = document.querySelector('.select-link');
    const mapLink = document.querySelector('.map-link');
    const homeLink2 = document.querySelector('.home-link2');
    const selectLink2 = document.querySelector('.select-link2');
    const mapLink2 = document.querySelector('.map-link2');

    homeLink.onclick = (e) => {
        console.log(homeLink)
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
    homeLink2.onclick = (e) => {
        e.preventDefault();
        displayHomeComponent('main');
    }
    selectLink2.onclick = (e) => {
        e.preventDefault();
        displayTrailSelectComponent('main');
    }
    mapLink2.onclick = (e) => {
        e.preventDefault();
        displayMapComponent('main');
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