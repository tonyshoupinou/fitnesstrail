import htmlresults from './result.component.html';
import { UserService } from '../shared/services/user.services'
import { ParcoursService } from '../shared/services/parcours.service';
import { Parcours } from '../shared/models/parcours.model';

export class ResultComponent {
    

    constructor(selector) {
        this.selector = selector
        this.displayResultPage()

    }

    displayResultPage() {
        document.querySelector(this.selector).innerHTML = htmlresults;
        this.gatherUserData();
        
    }

    gatherUserData() {
        document.querySelector('.username').innerHTML = UserService.getUser().name;
        document.querySelector('.parcoursname').innerHTML = ParcoursService.getParcours().name;
        document.querySelector('.parcoursdifficulty').innerHTML = ParcoursService.getParcours().difficulty;
        this.displayByStepAndByTime();
    }
    
    displayByStepAndByTime() {
    }
    
    displayHomePage() {
    }
}