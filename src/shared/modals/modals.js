import { MapComponent } from '../../map/map.component';
import html from './modals.html';
import html2 from './modals2.html';
import html3 from './modals3.html';

export const displayModalComponent = (modalID) => {

    const modal = document.querySelector(".displayModal");

    if (modalID === "modal1") {
        modal.innerHTML = html;
    } else if (modalID === "modal2") {
        modal.innerHTML = html2;
    } else {
        modal.innerHTML = html3;
    };

    const elems = document.querySelectorAll('.modal');
    const instances = M.Modal.init(elems);
    
    selectedParcours(modalID);
};

const selectedParcours = (id) => {
    document.querySelector('.parcoursID').onclick = (e) => {
        e.preventDefault();
        new MapComponent("main");
        console.log(id);
    }
}
