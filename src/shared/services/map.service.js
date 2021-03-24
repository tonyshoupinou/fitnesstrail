export class MapService {

    constructor() {}

    static getMap() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.watchPosition((position) => {
                let coords = { lat: position.coords.latitude, lng: position.coords.longitude};

                let map = new google.maps.Map(document.querySelector(".display-map"), {
                    zoom: 15,
                    center: coords,
                });

                let marker = new google.maps.Marker({
                    position: coords,
                    map: map,
                });

                resolve();
            }, () => {
                console.log("Something went wrong...");
                reject();
            });
        });

    }
}

