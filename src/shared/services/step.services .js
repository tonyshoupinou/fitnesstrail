import { Step } from "../models/step.model";
 
const step = new Step();
 
export class StepServive {
 
    constructor() {}
 
    static getStep() {
        return step;
    }
 
    static setStepCoords(coords) {
        step.coords = coords;
    }
 
    static setUserCoords(coords) {
        step.userCoords = coords;
    }
 
    static setStepChecked(isChecked) {
        step.isChecked = isChecked;
    }
}