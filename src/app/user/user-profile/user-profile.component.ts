import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  private _user;

  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  private getUser(): void {
    this._userService.getUserById(this._route.snapshot.params.id).subscribe(user => this._user = user);
  }

  get user() {
    return this._user;
  }

}
