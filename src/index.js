import 'materialize-css';
import { displayNav } from './shared/navComponent/nav.component';
import { navRouting } from './shared/navComponent/nav-routing';
import { displayTrailSelectComponent, clicButtonParcours1, clicButtonParcours2, clicButtonParcours3 } from './trailselect/trailselect';
import { displayModalComponent, id} from './shared/modals/modals';
import { Loader } from "@googlemaps/js-api-loader"

// navbar
displayNav();
navRouting();

// test map
// let map, infoWindow;

// const addMarkers = (coordsmarker) => {
//     const marker = new google.maps.Marker({
//         position: coordsmarker,
//         map: map,
//         animation: google.maps.Animation.DROP,
//         icon: './img/iconmaps.gif'
//     });     
// };

// navigator.geolocation.getCurrentPosition(
//     // definition de la position 
//     (position) => {
//         // affichage de la lattitude et de la longitude dans la console
//         console.log(
//             `Latitude : ${position.coords.latitude}`,
//             `Longitude : ${position.coords.longitude}`
//         );
//         const coords = {lat: position.coords.latitude, lng: position.coords.longitude}
        
//         //initialisation de la map 
//         const loader = new Loader({
//             apiKey: "AIzaSyD21vP4lQ5LA5g_GrU0ivkXLUMO0BIKz2s",
//             version: "weekly",
//             // ...additionalOptions,
//         });
//           // afffichage de la map
//         loader.load().then(() => {
//             map = new google.maps.Map(document.getElementById("map"), {
//               center: coords,
//               zoom: 13,
//             });

//             //ajout de marker multiples
//             addMarkers({lat: 45.740499725090025, lng: 4.856520336472425});
//             addMarkers({lat: 45.74714083908248, lng: 4.858850432950182}); 
//             addMarkers({lat: 45.7456032093675, lng: 4.852157557641781}); 
//             addMarkers({lat: 45.74389891003761, lng: 4.856396194513498});

//             // ajout d'un marker unique
//             const marker = new google.maps.Marker({
//                 position: coords,
//                 map: map,
//                 animation: google.maps.Animation.DROP,
//             });
//         });
//     }, 
//     // comportement en cas d'erreur
//     (err) => {
//         console.log(`ERROR: ${err.message}`);
//     },
// );
