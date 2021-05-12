import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterUserComponent } from './user/register-user/register-user.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';

const routes: Routes = [
  {path: '', component : HomePageComponent },
  {path: 'register', component: RegisterUserComponent},
  {path: 'users/:id', component: UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
