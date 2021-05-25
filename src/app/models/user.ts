import { Coach } from "./coach";

export interface User {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    profilePicture: string,
    coachProfile: Coach
}