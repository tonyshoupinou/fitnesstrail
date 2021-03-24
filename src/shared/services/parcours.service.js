import { Parcours } from "../models/parcours.model";
 
const parcours = new Parcours();
 
export class ParcoursService {
 
    constructor() {}
 
    static getParcours() {
        return parcours;
    }
 
    static setParcoursName(name) {
        parcours.name = name;
    }
 
    static setParcoursDifficulty(difficulty) {
        parcours.difficulty = difficulty;
    }
 
    static setNbOfSteps(num) {
        parcours.nbOfSteps = num;
    }
 
    static setParcoursUserTime(data) {
        parcours.userTimer = data;
    }
 
    static setParcoursTimer(data) {
        parcours.parcoursTimer = data;
    }
 
    static setIsParcoursFinished(isFinished) {
        parcours.isFinished = isFinished;
    }
 
    static setParcoursSteps(data) {
        parcours.arrayOfSteps = data;
    }
}