import { Parcours } from "./parcours.model";

export class User {

    /**
     * 
     * @param {String} name 
     * @param {Parcours} selectedParcours 
     */
    constructor(name, selectedParcours){

        /**
         * @type {String}
         */
        this.name = name;
        
        /**
         * @type {Parcours}
         */
        this.parcours = selectedParcours;
        // this.selectedParcours = selectedParcours;
    }
    
}