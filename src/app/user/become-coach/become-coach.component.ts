import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-become-coach',
  templateUrl: './become-coach.component.html',
  styleUrls: ['./become-coach.component.css']
})
export class BecomeCoachComponent implements OnInit {

  private _user;
  private _successMessage = "";

  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.getUser();
  }

  private getUser(): void {
    this._userService.getUserById(this._route.snapshot.params.id).subscribe(user => this._user = user);
  }

  get successMessage() {
    return this._successMessage;
  }

  set successMessage(message: string) {
    this._successMessage = message;
  }

  get user() {
    return this._user;
  }

  becomeCoach() {
    this._userService.becomeCoach(this._user.id).subscribe(user => {
        this._user = user;
        localStorage.setItem('userRoles', JSON.stringify(user.roles));

        this._successMessage = "You are a coach now!"
      },
      error => this._successMessage = error.error.message);
  }

  //TODO add changing button color for left menu become a coach


}
