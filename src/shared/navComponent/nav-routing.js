import { displayHomeComponent } from "../../home/home";
import { displayMapComponent } from "../../mapComponent/map.component";
import { displayTrailSelectComponent } from '../../trailselect/trailselect';

export const navRouting = () => {
const mapLink = document.querySelectorAll(".map-link");
    mapLink.forEach((btn)=> {
        btn.onclick = (e) => {
        e.preventDefault();
        displayMapComponent("main");
        }
})
const trailSelect = document.querySelectorAll('.select-link')
    trailSelect.forEach( (btn) => {
        btn.onclick =(e) => {
        e.preventDefault();
        displayTrailSelectComponent('main')
    }
})
const homeLink = document.querySelectorAll('.home-link');
    homeLink.forEach((btn) => {
        btn.onclick = (e) => {
            e.preventDefault();
            displayHomeComponent('main');
        }
});
  
}