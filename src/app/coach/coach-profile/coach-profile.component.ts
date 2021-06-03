import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-coach-profile',
  templateUrl: './coach-profile.component.html',
  styleUrls: ['./coach-profile.component.css']
})
export class CoachProfileComponent implements OnInit {
  private _coach: User;

  constructor(private _authService: AuthService, private _userService: UserService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCoach();
  }

  private getCoach(): void {
    this._userService.getUserById(this._route.snapshot.params.id).subscribe(coach => this._coach = coach);
  }

  get coach() {
    return this._coach;
  }

  isOwnProfile() {
    return this._authService.isOwnProfile(this._coach.id);
  }
}


