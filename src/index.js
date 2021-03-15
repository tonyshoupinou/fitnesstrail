import 'materialize-css';
import { displayNav } from './shared/navComponent/nav.component';
import { navRouting } from './shared/navComponent/nav-routing';
import { displayMapComponent } from './mapComponent/map.component';

// navbar
displayNav();
navRouting();
displayMapComponent("main");