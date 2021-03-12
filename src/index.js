import 'materialize-css';
import { displayMapComponent } from './mapComponent/map.component';
import { displayMap } from './mapComponent/map';
import { displayNav } from './shared/navComponent/nav.component';
import { homeRedirection } from './shared/navComponent/nav-routing';
import { displayTrailSelectComponent } from './trailselect/trailselect';

displayTrailSelectComponent ("main")
displayMapComponent('main');
displayMap();

// navbar
displayNav();
homeRedirection();