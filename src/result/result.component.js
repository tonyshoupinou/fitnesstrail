import htmlresults from './result.component.html';

export class ResultComponent {
    

    constructor(selector) {
        this.selector = selector
        this.displayResultPage()

    }

    displayResultPage() {
        document.querySelector(this.selector).innerHTML = htmlresults
        
    }

    gatherUserData() {

    }
    
    displayByStepAndByTime() {

    }
    
    displayHomePage() {

    }

}