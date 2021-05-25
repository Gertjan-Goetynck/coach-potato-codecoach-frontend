import { Coach } from "./coach";
import { Role } from "./role";

export interface User {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    roles: Role[],
    pictureUrl: string,
    coachProfile: Coach
}
