import { Component, OnInit } from '@angular/core';
import { CoachingSessionService } from "../../services/coaching-session.service";
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "../../auth/auth.service";
import { CoachSession } from "../../models/coach-session";
import * as moment from "moment";


@Component({
  selector: 'app-coach-coaching-session-list',
  templateUrl: './coach-coaching-session-list.component.html',
  styleUrls: ['./coach-coaching-session-list.component.css']
})
export class CoachCoachingSessionListComponent implements OnInit {

  private _upcomingCoachingSessions: CoachSession[] = [];
  private _archivedCoachingSessions: CoachSession[] = [];
  private _awaitingFeedbackCoachingSessions: CoachSession[] = [];

  loadedTables = false;

  constructor(private _coachingSessionService: CoachingSessionService, private _route: ActivatedRoute, private _authService: AuthService) {
  }

  ngOnInit(): void {
    this.getCoachingSessions();
  }

  getCoachingSessions() {
    this._archivedCoachingSessions = [];
    this._upcomingCoachingSessions = [];
    this._awaitingFeedbackCoachingSessions = [];
    this.loadedTables = false;
    this._coachingSessionService.getCoachingSessionsByCoachId(this._route.snapshot.params.id).subscribe(coachingSessions => {
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
        case 'DONE_WAITING_FEEDBACK':
          this._awaitingFeedbackCoachingSessions.push(coachingSession);
          break;

        case 'REQUESTED':
        case 'ACCEPTED':
        case 'DECLINED': {
          const now = moment();
          const dateSession = moment(`${coachingSession.date} ${coachingSession.time}`);

          if (dateSession.isBefore(now)) {
            this._archivedCoachingSessions.push(coachingSession);
          } else this._upcomingCoachingSessions.push(coachingSession);
        }
          break;
      }
    })
  }

  get upcomingCoachingSessions(): CoachSession[] {
    return this._upcomingCoachingSessions;
  }

  get archivedCoachingSessions(): CoachSession[] {
    return this._archivedCoachingSessions;
  }

  get awaitingFeedbackCoachingSessions(): CoachSession[] {
    return this._awaitingFeedbackCoachingSessions;
  }

  acceptSession(id: string) {
    this._coachingSessionService.acceptCoachSession(id).subscribe(() => this.getCoachingSessions());
  }

  declineSession(id: string) {
    this._coachingSessionService.declineCoachSession(id).subscribe(() => this.getCoachingSessions());
  }

  isAuthenticated(): boolean {
    return this._authService.isAuthenticated();
  }
}
