import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from '../models/role';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  isCoach() : boolean {
    const roles : Role[] = JSON.parse(localStorage.getItem("userRoles"));
    console.log(roles);
    if(roles && roles.some(role => role.roleType === "Coach")) {
      return true;
    }
    this.router.navigate(["/login"]);
    return false;
 }

  isAuthenticated() : boolean {
    const roles : Role[] = JSON.parse(localStorage.getItem("userRoles"));
    console.log(roles);
    if(roles != null && roles.length > 0 ) {
      return true;
    }
    return false;
  }
}
