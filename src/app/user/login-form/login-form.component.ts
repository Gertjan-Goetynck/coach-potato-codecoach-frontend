import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { patternValidator } from 'src/app/forms-validators/pattern-validator';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {


  private _loginErrors: string;

  constructor(private _authService: AuthService, private _formBuilder: FormBuilder, private _router: Router) {

  }
  private _loginUserForm = this._formBuilder.group({
    email: ['', [Validators.required, patternValidator(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, { isValidEmail: true })]],
    password: ['', Validators.required]
  })

  ngOnInit(): void {
  }

  onSubmit(): void {
    this._authService.loginUser(this._loginUserForm.value).subscribe(user => {
      this._authService.setLocalStorage(user);
      this._router.navigate([`/users/${user.id}`]);
    }, error => this._loginErrors = error.error.message);
  }

  get loginErrors() {
    return this._loginErrors;
  }

  get loginUserForm() {
    return this._loginUserForm;
  }
}

