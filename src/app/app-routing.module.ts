import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterUserComponent } from './user/register-user/register-user.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import {LoginFormComponent} from "./user/login-form/login-form.component";
import {BecomeCoachComponent} from "./user/become-coach/become-coach.component";

const routes: Routes = [
  {path: '', component : HomePageComponent },
  {path: 'register', component: RegisterUserComponent},
  {path: 'users/:id', component: UserProfileComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'users/:id/become-coach',component: BecomeCoachComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
