import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs/internal/Observable";
import { Coach } from "../models/coach";
import { User } from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class CoachService {
  private _coachUrl: string;

  constructor(private _http: HttpClient) {
    this._coachUrl = `${environment.backendUrl}/coaches`;
  }

  getCoaches(): Observable<User[]> {
    return this._http.get<User[]>(this._coachUrl);
  }

  getCoachById(coachId: string): Observable<User> {
    return this._http.get<User>(`${this._coachUrl}/${coachId}`);
  }

  editCoachProfileInformation(coachId: string, information): Observable<User> {
    return this._http.put<User>(`${this._coachUrl}/${coachId}/updateprofile`, information);
  }


}
