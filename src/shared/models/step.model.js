export class Step {

    /**
     * 
     * @param {String} coords 
     * @param {String} userCoords
     * @param {Boolean} isChecked 
     */
    constructor(coords, userCoords, isChecked) {

        /**
         * @type {String}
         */
        this.coords = coords;

        /**
         * @type {String}
         */
        this.userCoords = userCoords;

        /**
         * @type {Boolean}
         */
        this.isChecked = isChecked;
    }
}