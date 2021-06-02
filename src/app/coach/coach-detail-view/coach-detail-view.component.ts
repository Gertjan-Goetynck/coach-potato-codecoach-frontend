import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/models/user';
import { CoachService } from 'src/app/services/coach.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-coach-detail-view',
  templateUrl: './coach-detail-view.component.html',
  styleUrls: ['./coach-detail-view.component.css']
})
export class CoachDetailViewComponent implements OnInit {

  private _isAuthenticated: boolean;
  private _coach: User;
  private _isOwnProfile: boolean;

  constructor(private _userService: UserService, private _route: ActivatedRoute, private _authService: AuthService) { }

  ngOnInit(): void {
    this._isAuthenticated = this._authService.isAuthenticated();
    this.getCoach();
    this._isOwnProfile= this._authService.isOwnProfile(this._route.snapshot.params.id);
  }

  get coach(): User {
    return this._coach;
  }

  get isAuthenticated(): boolean {
    return this._isAuthenticated;
  }

  private getCoach(): void {
    this._userService.getUserById(this._route.snapshot.params.id).subscribe(coach => this._coach = coach);
  }

  get isOwnProfile(): boolean{
    return this._isOwnProfile;
  }
}
