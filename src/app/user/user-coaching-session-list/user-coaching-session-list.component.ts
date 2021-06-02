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

  private _upcommingCoachingSessions: CoachSession[] = [];
  private _archivedCoachingSessions: CoachSession[] = [];
  loadedTables = false;

  constructor(private _coachingSessionService: CoachingSessionService, private _route: ActivatedRoute, private _authService: AuthService) { }

  ngOnInit(): void {
    this.getCoachingSessions();
  }


  getCoachingSessions() {
    this._coachingSessionService.getCoachingSesionsByCoacheeId(this._route.snapshot.params.id).subscribe(coachingSessions => {
      this.filterSessionsByStatus(coachingSessions);
      this.loadedTables = true;
    });
  }

  filterSessionsByStatus(coachingSessions: CoachSession[]) {
    coachingSessions.forEach(coachingSession => {
      switch (coachingSession.status) {
        case 'AUTOMATICALLY_CLOSED':
          this._archivedCoachingSessions.push(coachingSession);
          break;
        case 'REQUESTED':
          this._upcommingCoachingSessions.push(coachingSession);
          break;
      }
    })
  }

  get upcommingCoachingSessions(): CoachSession[] {
    return this._upcommingCoachingSessions;
  }

  get archivedCoachingSessions(): CoachSession[] {
    return this._archivedCoachingSessions;
  }

  isAuthenticated(): boolean {
    return this._authService.isAuthenticated();
  }

}
