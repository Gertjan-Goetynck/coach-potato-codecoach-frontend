import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { BecomeCoachComponent } from './become-coach/become-coach.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    RegisterUserComponent,
    UserProfileComponent,
    UserMenuComponent,
    LoginFormComponent,
    BecomeCoachComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    UserRoutingModule,
    NgbModule
  ]
})
export class UserModule { }
