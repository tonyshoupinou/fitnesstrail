import { navRouting } from './nav-routing';
import template from './nav.component.html';

export class NavBarComponent {

    constructor(selector) {
        this.selector = selector;
        this.display();
    }

    display() {
        document.querySelector(this.selector).innerHTML = template;
        this.initNav();
    }
    
    initNav() {
        M.Sidenav.init(document.querySelectorAll('.sidenav'));
        navRouting();
    }
} 
