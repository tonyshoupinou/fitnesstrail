import 'materialize-css';
import { NavBarComponent } from './shared/navComponent/nav.component';

if (!window.cordova) {
    alert("je suis sur browser")
    new NavBarComponent('header');
} else {
    window.document.addEventListener("deviceready", () => {
        alert("je suis sur mobile");
        new NavBarComponent('header');
    });
}
