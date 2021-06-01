import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-coach-main-nav',
  templateUrl: './coach-main-nav.component.html',
  styleUrls: ['./coach-main-nav.component.css']
})
export class CoachMainNavComponent implements OnInit {
  private _userId: string;

  constructor(private _authService: AuthService) { }

  ngOnInit(): void {

  }

  get userId(): string {
    return this._userId;
  }

  getUserId(): string {
    return this._authService.getCurrentUserId();
  }

}
