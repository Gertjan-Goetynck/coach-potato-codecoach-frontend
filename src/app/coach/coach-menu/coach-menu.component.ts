import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-coach-menu',
  templateUrl: './coach-menu.component.html',
  styleUrls: ['./coach-menu.component.css']
})
export class CoachMenuComponent implements OnInit {

  private _userId: string;

  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
    this._userId = this.getUserId();
  }

  get userId(): string {
    return this._userId;
  }

  getUserId(): string {
    return this._authService.getCurrentUserId();
  }
}
