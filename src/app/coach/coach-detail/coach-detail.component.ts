import { Component, Inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { CoachService } from 'src/app/services/coach.service';

@Component({
  selector: 'app-coach-detail',
  templateUrl: './coach-detail.component.html',
  styleUrls: ['./coach-detail.component.css']
})
export class CoachDetailComponent implements OnInit {

  private _coach: User;

  constructor(private _coachService: CoachService) { }

  ngOnInit(): void {

  }

  get coach(): User {
    return this._coach;
  }

  @Input() set coach(coach: User) {
    this._coach = coach;
  }


}
