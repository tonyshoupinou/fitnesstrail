import 'materialize-css';
import { NavBarComponent } from './shared/navComponent/nav.component';
import { UserService } from './shared/services/user.service';
import { ParcoursService } from './shared/services/parcours.service';

// navbar
// new NavBarComponent('header');

// ParcoursService.setIsParcoursFinished(true);
// ParcoursService.setNbOfSteps(2);
// const parcours = ParcoursService.getParcours();

// UserService.setUserName('hugo');
// UserService.setUserParcours(parcours);
// const user = UserService.getUser();

// console.log(user)

if (!window.cordova) {
    alert("je suis sur browser")
    new NavBarComponent('header');
} else {
    window.document.addEventListener("deviceready", () => {
        alert("je suis sur mobile");
        new NavBarComponent('header');
    });
}
