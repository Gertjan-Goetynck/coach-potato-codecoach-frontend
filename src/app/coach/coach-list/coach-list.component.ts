import { Component, OnInit } from '@angular/core';
import {Coach} from "../../models/coach";
import {CoachService} from "../../services/coach.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-coach-list',
  templateUrl: './coach-list.component.html',
  styleUrls: ['./coach-list.component.css']
})
export class CoachListComponent implements OnInit {

  private _coaches: User[];

  constructor(private coachService: CoachService) { }

  ngOnInit(): void {
    this.getCoaches();
  }

  getCoaches(): void {
    this.coachService.getCoaches().subscribe(coaches => this._coaches = coaches );
  }

  get coaches(){
    return this._coaches;
  }

}
