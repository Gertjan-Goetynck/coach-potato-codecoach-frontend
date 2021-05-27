import { Component, OnInit } from '@angular/core';
import {Coach} from "../../models/coach";
import {CoachService} from "../../services/coach.service";
import {User} from "../../models/user";
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-coach-list',
  templateUrl: './coach-list.component.html',
  styleUrls: ['./coach-list.component.css']
})
export class CoachListComponent implements OnInit {

  private _coaches: User[];
  private _isAuthenticated : boolean;
  private _userId : string;

  constructor(private coachService: CoachService, private _authService: AuthService) { }

  ngOnInit(): void {
    this.getCoaches();
    this._isAuthenticated = this._authService.isAuthenticated();
    this.getCurrentUserId();
  }

  getCoaches(): void {
    this.coachService.getCoaches().subscribe(coaches => this._coaches = coaches );
  }

  get coaches(){
    return this._coaches;
  }

  get isAuthenticated() {
      return this._isAuthenticated;
  }

  get userId() : string {
    return this._userId;
  }

  getCurrentUserId() : void {
    this._userId = this._authService.getCurrentUserId();
  }

}
