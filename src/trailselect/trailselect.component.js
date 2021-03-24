import { User } from '../shared/models/user.model';
import { UserService } from '../shared/services/user.services';
import { ModalComponent } from './modals/modal.component';
import htmltrailselect from './trailselect.component.html';
// import { Loader } from "@googlemaps/js-api-loader"

export class TrailSelectComponent{

    constructor (selector) {
        this.selector = selector
        this.displayTrailSelectPage()
    }

    displayTrailSelectPage() {
        document.querySelector(this.selector).innerHTML = htmltrailselect;
        document.querySelector('.name').innerHTML = UserService.getUser().name
        this.selectParcours();
    }

    selectParcours() {
        const btnparcours = document.querySelectorAll('.buttonparcours');
        btnparcours.forEach( (btnSelectparcours) => {
            btnSelectparcours.onclick = (e) => {
                e.preventDefault();
                this.displaymodalparcours(btnSelectparcours)
            }
        });
    }

    displaymodalparcours(btn) {
        const changedHref = btn.getAttribute("href").substring(1);
        new ModalComponent(changedHref);
    }
}





// // COMPOSANT - appelle la fonction displayTrailSelectComponent en lui passant l'argument 'selector'
// export const displayTrailSelectComponent = (selector) => {
   
//     // COMPOSANT - écrit le contenu html de htmlTrailSlect en lieu et place du html du document, dans la balise identifiée par (selector) 
//     document.querySelector(selector).innerHTML = htmltrailselect;
    
//     // SERVICE - stock tous les contenus des éléments identifiés pas la class .buttonparcours dans un tableau, dans la variable toto2  
//     const toto2 = document.querySelectorAll('.buttonparcours');
    
//     // MODEL - pour chaque ligne du tableau contenu dans la variable toto2, que je stock dans la variable btnSelectparcours :
//     toto2.forEach( (btnSelectparcours) => {
    
//         // COMPOSANT - écoute l'évenement onclick (stocké dans la variable btnSelectparcours)
//         // et empeche le comportement par défaut des balises <a> (rafraichissement)
//         btnSelectparcours.onclick = (e) => {
//             e.preventDefault();
           
//             // SERVICE - stock dans la variable toto, la valeur de la variable btnSelectparcours au format String, sur lequel je supprime (subtring) le 1 caractère
//             const toto = btnSelectparcours.getAttribute("href").substring(1);
          
//             // COMPOSANT appelle la fonntion diplayModalComponent avec l'argument toto.
//             displayModalComponent(toto);
//         }
//     })
// };