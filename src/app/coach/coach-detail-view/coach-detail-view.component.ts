import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { CoachService } from 'src/app/services/coach.service';

@Component({
  selector: 'app-coach-detail-view',
  templateUrl: './coach-detail-view.component.html',
  styleUrls: ['./coach-detail-view.component.css']
})
export class CoachDetailViewComponent implements OnInit {

  private _coach: User;

  constructor(private _coachService: CoachService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this._route.snapshot.params.id);
    this.getCoach();
  }

  get coach(): User {
    return this._coach;
  }

  getCoach() {

    this._coachService.getCoachById(this._route.snapshot.params.id).subscribe(coach => {
      console.log("test");
      console.log(coach);
      this._coach = coach;

    });
  }
}
