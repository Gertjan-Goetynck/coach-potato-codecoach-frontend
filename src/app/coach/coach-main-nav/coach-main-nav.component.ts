import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-coach-main-nav',
  templateUrl: './coach-main-nav.component.html',
  styleUrls: ['./coach-main-nav.component.css']
})
export class CoachMainNavComponent implements OnInit {
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
