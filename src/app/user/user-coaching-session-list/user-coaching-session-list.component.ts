import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { CoachSession } from 'src/app/models/coach-session';
import { CoachingSessionService } from 'src/app/services/coaching-session.service';

@Component({
  selector: 'app-user-coaching-session-list',
  templateUrl: './user-coaching-session-list.component.html',
  styleUrls: ['./user-coaching-session-list.component.css']
})
export class UserCoachingSessionListComponent implements OnInit {

  private _coachingSessions: CoachSession[];
  constructor(private _coachingSessionService: CoachingSessionService, private _route: ActivatedRoute, private _authService: AuthService) { }

  ngOnInit(): void {
    this.getCoachingSessions();
  }


  getCoachingSessions() {
    this._coachingSessionService.getCoachingSesionsByCoacheeId(this._route.snapshot.params.id).subscribe(coachingSessions => this._coachingSessions = coachingSessions);
  }

  get coachingSessions(): CoachSession[] {
    return this._coachingSessions;
  }

  isAuthenticated(): boolean {
    return this._authService.isAuthenticated();
  }

}
