import { displayHomeComponent } from "../../home/home";
import { GoogleMapComponent } from "../../map/googleMap/google-map.component";
import { MapComponent } from "../../map/map.component";
import { ResultComponent } from "../../result/result.component";
import { displayTrailSelectComponent } from '../../trailselect/trailselect';

export const navRouting = () => {
    const mapLink = document.querySelectorAll(".map-link");
    mapLink.forEach((btn)=> {
        btn.onclick = (e) => {
            e.preventDefault();
            new MapComponent("main");
        }
    });

    const trailSelect = document.querySelectorAll('.select-link');
    trailSelect.forEach( (btn) => {
        btn.onclick = (e) => {
            e.preventDefault();
            displayTrailSelectComponent('main');
        }
    });

    const homeLink = document.querySelectorAll('.home-link');
    homeLink.forEach((btn) => {
        btn.onclick = (e) => {
            e.preventDefault();
            displayHomeComponent('main');
        }
    });

    const resultLink = document.querySelectorAll('.result-link');
    resultLink.forEach((btn) => {
        btn.onclick = (e) => {
            e.preventDefault();
            new ResultComponent('main');
        }
    });

    displayHomeComponent('main');
}