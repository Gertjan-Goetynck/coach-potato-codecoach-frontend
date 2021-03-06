import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';

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

  becomeCoach(id: string): Observable<User> {
    return this._http.put<User>(`${this._userUrl}/coach/${id}`, null);
  }

}
