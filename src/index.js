import 'materialize-css';
import { displayMapComponent } from './mapComponent/map.component';
import { displayMap } from './mapComponent/map';
import { displayNav } from './shared/navComponent/nav.component';
import { homeRedirection } from './shared/navComponent/nav-routing';
import { displayTrailSelectComponent } from './trailselect/trailselect';
import {displayHomeComponent} from './home/home';

// displayTrailSelectComponent ("main");
displayHomeComponent("main");
// displayTrailSelectComponent ("main");
// displayMapComponent('main');
// displayMap();

// navbar
displayNav();
homeRedirection();
