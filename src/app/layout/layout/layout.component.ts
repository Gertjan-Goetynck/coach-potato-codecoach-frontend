import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
  }

  handleLoggedInEvent(event) {
    console.log("Event triggered");
  }

  isCoach() : boolean {
    return this._authService.isCoach();
}

}
