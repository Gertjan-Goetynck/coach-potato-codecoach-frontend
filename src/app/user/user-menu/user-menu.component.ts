import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  private _userId: string;

  constructor() { }

  ngOnInit(): void {
  }

  get userId(): string {
    return this._userId;
  }

  @Input() set userId(userId: string) {
    this._userId = userId;
  }

}
