import { Parcours } from "./parcours.model";

export class User {

    /**
     * 
     * @param {String} name 
     * @param {Parcours} parcours 
     */
    constructor(name, parcours){

        /**
         * @type {String}
         */
        this.name = name;
        
        /**
         * @type {Parcours}
         */
        this.parcours = parcours;
    }   
}