import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachGuard } from '../auth/coach.guard';
import { CoachProfileComponent } from './coach-profile/coach-profile.component';
import {CoachListComponent} from "./coach-list/coach-list.component";

const routes: Routes = [
  { path: 'coaches/:id', canActivate: [CoachGuard] ,component: CoachProfileComponent },
  {path: 'coaches', component: CoachListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachRoutingModule { }
