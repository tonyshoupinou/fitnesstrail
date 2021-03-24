import { User } from "../models/user.model";
import { ParcoursService } from "./parcours.service";

const user = new User();

export class UserService {

    constructor() {}

    static getUser() {
        return user;
    }

    static setUserName(name) {
        user.name = name;
    }

    static setUserParcours() {
        user.parcours = ParcoursService.getParcours();
    }
}