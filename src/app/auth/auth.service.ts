import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Role } from '../models/role';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private router: Router, private _http: HttpClient) {
  }

  isCoach(): boolean {
    const roles: Role[] = JSON.parse(localStorage.getItem("userRoles"));
    if (roles && roles.some(role => role.roleType === "Coach")) {
      return true;
    }
    return false;
  }

  isAuthenticated(): boolean {
    const roles: Role[] = JSON.parse(localStorage.getItem("userRoles"));
    if (roles != null && roles.length > 0) {
      return true;
    }
    return false;
  }

  loginUser(credentials): Observable<User> {

    const httpOptions = {
      headers: new HttpHeaders({
        email: credentials.email,
        password: credentials.password
      })
    };

    return this._http.get<User>(`${environment.backendUrl}/users/login`, httpOptions);

  }

  getCurrentUserId(): string {
    if (this.isAuthenticated) {
      console.log(localStorage.getItem("userId"));
      return localStorage.getItem("userId");
    }
    return null;
  }

  isOwnProfile(id: string): boolean {
    return id === this.getCurrentUserId();
  }

  get isLoggedIn(): Observable<boolean> {
    return this._isLoggedIn.asObservable();
  }

  setLoggedIn(isLoggedIn: boolean) {
    this._isLoggedIn.next(isLoggedIn);
  }

  setLocalStorage(user: User) {
    localStorage.setItem('userId', user.id);
    localStorage.setItem('userRoles', JSON.stringify(user.roles));
    this.setLoggedIn(true);
  }
}
