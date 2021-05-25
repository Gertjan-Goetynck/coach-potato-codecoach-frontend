import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import { cpuUsage } from 'process';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  private _loginErrors: string;

  constructor(private _formBuilder: FormBuilder, private _userService: UserService, private _router: Router) {

  }
private _loginUserForm = this._formBuilder.group({
  email:['', Validators.required],
  password: ['', Validators.required]
})

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this._loginUserForm);
    this._userService.loginUser(this._loginUserForm.value).subscribe(user => {
      
     localStorage.setItem('userId',user.id);
     localStorage.setItem('userRoles', JSON.stringify(user.roles));
     this._router.navigate([`/users/${user.id}`]), error => console.log(error.error.message)});
    
  }
  //TODO Handle wrong login details for frontend (email/password)

  get loginUserForm() {
    return this._loginUserForm;
  }
}

