import { User } from '../shared/models/user.model';
import { UserService } from '../shared/services/user.service';
import { TrailSelectComponent } from '../trailselect/trailselect.component';
import homehtml from "./home.html";


export class HomeComponent{

    constructor (selector) {
        this.selector = selector
        this.displayHomeComponent()
    }

    displayHomeComponent() {
        document.querySelector(this.selector).innerHTML = homehtml;
        this.inputName();
    }

    inputName() {
        const goButton = document.querySelector('.btn');
        const userName = document.querySelector('#Name');
        goButton.onclick = (e) => {
            e.preventDefault();
            UserService.setUserName(userName.value)
            new TrailSelectComponent("main")
        }
    }
}
// export const displayHomeComponent = (selector) => {
//     document.querySelector(selector).innerHTML = html;

//     const goButton = document.querySelector('.btn');
//     const userName = document.querySelector('#Name');

//     goButton.onclick = () =>{

//         console.log(userName.value);
//         return false;
//     }

//     // new TrailSelectComponent("main");
// };