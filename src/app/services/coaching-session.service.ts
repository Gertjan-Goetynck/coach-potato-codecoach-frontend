import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {CoachSession} from "../models/coach-session";
import {Observable} from "rxjs/internal/Observable";
import {Coach} from "../models/coach";

@Injectable({
  providedIn: 'root'
})
export class CoachingSessionService {

  private _sessionUrl: string;

  constructor(private _http: HttpClient) {
    this._sessionUrl = `${environment.backendUrl}/coachsessions`;
  }

  organiseCoachSession(coachSession): Observable<CoachSession>{
    return this._http.post<CoachSession>(this._sessionUrl, coachSession);
  }


}
