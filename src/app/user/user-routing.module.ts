import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { BecomeCoachComponent } from './become-coach/become-coach.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UserCoachingSessionListComponent } from './user-coaching-session-list/user-coaching-session-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: 'register', component: RegisterUserComponent },
  { path: 'users/:id', component: UserProfileComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'users/:id/become-coach', canActivate: [AuthGuard], component: BecomeCoachComponent },
  { path: 'users/:id/coach-sessions', canActivate: [AuthGuard], component: UserCoachingSessionListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
