import { Component, OnInit } from '@angular/core';
import {CoachingSessionService} from "../../services/coaching-session.service";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../auth/auth.service";
import {CoachSession} from "../../models/coach-session";

@Component({
  selector: 'app-coach-coaching-session-list',
  templateUrl: './coach-coaching-session-list.component.html',
  styleUrls: ['./coach-coaching-session-list.component.css']
})
export class CoachCoachingSessionListComponent implements OnInit {

  private _coachingSessions: CoachSession[];

  constructor(private _coachingSessionService: CoachingSessionService, private _route: ActivatedRoute, private _authService: AuthService) { }

  ngOnInit(): void {
    console.log("test here");
    this.getCoachingSessions();
  }

  getCoachingSessions(){
    console.log(this._route.snapshot.params.id);
    this._coachingSessionService.getCoachingSessionsByCoachId(this._route.snapshot.params.id).subscribe(coachingSessions => this._coachingSessions = coachingSessions);
  }

  get coachingSessions(): CoachSession[] {
    return this._coachingSessions;
  }

  isAuthenticated(): boolean {
    return this._authService.isAuthenticated();
  }
}
