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
  }

  get userId(): string {
    return this._userId;
  }

  @Input() set userId(userId: string) {
    this._userId = userId;
  }

  isCoach() {
    return this._authService.isCoach();
  }

}
