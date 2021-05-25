import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-coach-menu',
  templateUrl: './coach-menu.component.html',
  styleUrls: ['./coach-menu.component.css']
})
export class CoachMenuComponent implements OnInit {

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
