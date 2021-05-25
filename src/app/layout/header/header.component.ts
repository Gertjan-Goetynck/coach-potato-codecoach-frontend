import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private _isLoggedIn : boolean;

  constructor(private _authService : AuthService, private router: Router) { }

  ngOnInit(): void {
    this._isLoggedIn = this._authService.isAuthenticated();
  }

  get isLoggedIn() {
    return this._isLoggedIn;
  }

  signOut() {
    localStorage.clear();
    this.router.navigate([""]);
  }
}
