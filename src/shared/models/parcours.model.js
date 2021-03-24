import { Step } from "./step.model";

export class Parcours{
    /**
     * 
     * @param {String} name 
     * @param {Number} difficulty 
     * @param {Number} nbOfSteps
     * @param {Number} userTime 
     * @param {Number} targetTime
     * @param {Boolean} isFinished
     * @param {Array<Step>} arrayOfSteps
     */
    constructor (name, difficulty, nbOfSteps, userTime, targetTime, isFinished) {
        
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
        this.userTime = userTime;
    
        /**
         * @type {Number}
         */
        this.targetTime = targetTime;

        /**
         * @type {Boolean}
         */
        this.isFinished = isFinished;

        /**
         * @type {Array<Step>};
         */
        this.arrayOfSteps = [];
    }
}