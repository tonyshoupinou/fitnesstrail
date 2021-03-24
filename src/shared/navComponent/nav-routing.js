import { HomeComponent } from "../../home/home";
import { TrailSelectComponent } from '../../trailselect/trailselect.component';
import { ResultComponent } from '../../result/result.component';
import { MapComponent } from "../../map/map.component";

export const navRouting = () => {
    const mapLink = document.querySelectorAll(".map-link");
    mapLink.forEach((btn)=> {
        btn.onclick = (e) => {
            e.preventDefault();
            new MapComponent("main");
        };
    });
    
    const trailSelect = document.querySelectorAll('.select-link')
    trailSelect.forEach( (btn) => {
        btn.onclick =(e) => {
            e.preventDefault();
            new TrailSelectComponent('main');
        };
    });
    
    const homeLink = document.querySelectorAll('.home-link');
    homeLink.forEach((btn) => {
        btn.onclick = (e) => {
            e.preventDefault();
            new HomeComponent('main');
        };
    });

    const resultLink = document.querySelectorAll('.result-link');
    resultLink.forEach((btn) => {
        btn.onclick = (e) => {
            e.preventDefault();
            new ResultComponent('main');
        }
    });  
    new HomeComponent('main');
}