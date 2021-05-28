import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

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
