import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../modules/user';
import { environment } from 'src/environments/environment';
import {HttpHeaders} from "@angular/common/http";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _userUrl: string;


  constructor(private _http: HttpClient) {
    this._userUrl = `${environment.backendUrl}/users`;
  }


  addUser(user: User): Observable<User> {
    return this._http.post<User>(this._userUrl, user);
  }

  getUserById(id: string): Observable<User> {
    return this._http.get<User>(`${this._userUrl}/${id}`);
  }

  loginUser(credentials): Observable<User> {

    const httpOptions = {
      headers: new HttpHeaders({
        email: credentials.email,
        password: credentials.password
      })
    };

    return this._http.get<User>(`${this._userUrl}/login`, httpOptions);


  }

}
