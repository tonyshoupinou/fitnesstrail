import 'materialize-css';
import { NavBarComponent } from './shared/navComponent/nav.component';

if (!window.cordova) {
    new NavBarComponent('header');
} else {
    window.document.addEventListener("deviceready", () => {
        new NavBarComponent('header');
    });
}
