import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { patternValidator } from 'src/app/forms-validators/pattern-validator';
import { stringMatchValidator } from 'src/app/forms-validators/string-match-validator';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  private _user: User;
  private _formBackendErrors = {
    email: ''
  };
  constructor(private _formBuilder: FormBuilder, private _userService: UserService, private _router: Router) { }

  private _registerUserForm = this._formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [
      Validators.required,
      patternValidator(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, { isValidEmail: true })
    ]],
    password: ['',
      Validators.compose([
        Validators.required,
        Validators.minLength(8),
        patternValidator(/\d/, { hasNumber: true }),
        patternValidator(/[A-Z]/, { hasCapitalCase: true })
      ])
    ],
    confirmPassword: ['', Validators.compose([Validators.required])],
    pictureUrl: ''

  },
    {
      validator: stringMatchValidator
    }
  )

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this._registerUserForm);
    this._userService.addUser(this._registerUserForm.value).subscribe(user => this._router.navigate([`/login`]), error => this._formBackendErrors.email = error.error.message);
  }

  get registerUserForm() {
    return this._registerUserForm;
  }

  get formBackendErrors() {
    return this._formBackendErrors;
  }
}
