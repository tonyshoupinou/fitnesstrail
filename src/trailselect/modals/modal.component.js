import { MapComponent } from '../../map/map.component';
import { ParcoursService } from '../../shared/services/parcours.service';
import html from './modal.html';
import html2 from './modal2.html';
import html3 from './modal3.html';

export class ModalComponent{

    constructor (href) {
        this.href = href
        this.displayModalComponent()
    }

    displayModalComponent() {
        const modal = document.querySelector(".displayModal");
        if (this.href === "modal1") {
            ParcoursService.setParcoursName("Parcours 1");
            ParcoursService.setParcoursDifficulty("très facile");
            modal.innerHTML = html;
        } else if (this.href === "modal2") {
            ParcoursService.setParcoursName("Parcours 2");
            ParcoursService.setParcoursDifficulty("facile");
            modal.innerHTML = html2;
        } else if (this.href === "modal3") {
            ParcoursService.setParcoursName("Parcours 3");
            ParcoursService.setParcoursDifficulty("moyenne");
            modal.innerHTML = html3;
        };
        const elems = document.querySelectorAll('.modal');
        const instances = M.Modal.init(elems);
        this.selectedParcours();
    }    
    
    selectedParcours() {
        document.querySelector('.parcoursID').onclick = (e) => {
            e.preventDefault();
            new MapComponent("main");
        }
    }
}
