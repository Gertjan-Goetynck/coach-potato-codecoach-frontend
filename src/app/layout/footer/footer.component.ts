import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Coach } from 'src/app/models/coach';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  private _year: number;
  // private _isCoach : boolean;

  constructor(private _authService: AuthService) {
    this._year = new Date().getFullYear();
  }

  ngOnInit(): void {
  }

  get year(): number {
    return this._year;
  }

  // isCoach() : boolean {
  //   return this._authService.isCoach();
  // }
}
