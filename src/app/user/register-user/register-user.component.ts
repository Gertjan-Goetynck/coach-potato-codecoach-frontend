import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/modules/user';
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
    email: ['', Validators.required],
    password: ['', Validators.required],
    repeatPassword: ['', Validators.required]
  })

  ngOnInit(): void {
  }

  onSubmit(): void {
    this._userService.addUser(this._registerUserForm.value).subscribe(user => this._router.navigate([`/users/${user.id}`]), error => this._formBackendErrors.email = error.error.message);
  }

  get registerUserForm() {
    return this._registerUserForm;
  }

  get formBackendErrors() {
    return this._formBackendErrors;
  }
}
