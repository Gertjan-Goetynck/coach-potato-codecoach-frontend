import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private _isLoggedIn: boolean;
  private _userId: string;

  constructor(private _authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this._isLoggedIn = this._authService.isAuthenticated();
    this._userId = this.getUserId();
  }

  //TODO: Switch sign in button to sign out when signed in

  get userId(): string {
    return this._userId;
  }

  getUserId(): string {
    return this._authService.getCurrentUserId();
  }

  get isLoggedIn() {
    return this._isLoggedIn;
  }

  signOut() {
    localStorage.clear();
    this._isLoggedIn = false;
    this.router.navigate([""]);
  }
}
