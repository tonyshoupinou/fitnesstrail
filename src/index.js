import 'materialize-css';
import { displayNav } from './shared/navComponent/nav.component';
import { navRouting } from './shared/navComponent/nav-routing';

// Device ready ?
if (window.cordova) {
    window.document.addEventListener("deviceready", () => {
        displayNav();
        navRouting();
        });
} else {
    displayNav();
    navRouting();
}