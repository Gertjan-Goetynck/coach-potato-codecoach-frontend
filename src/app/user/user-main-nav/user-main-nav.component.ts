import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-user-main-nav',
  templateUrl: './user-main-nav.component.html',
  styleUrls: ['./user-main-nav.component.css']
})
export class UserMainNavComponent implements OnInit {

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

  isCoach() {
    return this._authService.isCoach();
  }

}
