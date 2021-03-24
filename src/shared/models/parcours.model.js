import { Step } from "./step.model";

export class Parcours{
    /**
     * 
     * @param {String} name 
     * @param {Number} difficulty 
     * @param {Number} nbOfSteps
     * @param {Number} userTimer 
     * @param {Number} parcoursTimer
     * @param {Boolean} isFinished
     * @param {Step[]} arrayOfSteps
     */
    constructor (name, difficulty, nbOfSteps, userTimer, parcoursTimer, isFinished) {
        
        /**
         * @type {String}
         */
        this.name = name;

        /**
         * @type {Number}
         */
        this.difficulty = difficulty;
        
        /**
         * @type {Number}
         */
        this.nbOfSteps = nbOfSteps;
        
        /**
         * @type {Number}
         */
        this.userTimer = userTimer;
    
        /**
         * @type {Number}
         */
        this.parcoursTimer = parcoursTimer;

        /**
         * @type {Boolean}
         */
        this.isFinished = isFinished;

        /**
         * @type {Step[]};
         */
        this.arrayOfSteps = [];
    }
}