import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachGuard } from '../auth/coach.guard';
import { CoachProfileComponent } from './coach-profile/coach-profile.component';
import { CoachListComponent } from "./coach-list/coach-list.component";
import { CoachDetailComponent } from './coach-detail/coach-detail.component';
import { CoachDetailViewComponent } from './coach-detail-view/coach-detail-view.component';
import {CoachCoachingSessionListComponent} from "./coach-coaching-session-list/coach-coaching-session-list.component";
import {EditCoachInformationComponent} from "./edit-coach-information/edit-coach-information.component";
import {OwnProfileGuard} from "../auth/own-profile.guard";

const routes: Routes = [
  { path: 'coaches/:id/details', component: CoachDetailViewComponent },
  { path: 'coaches/:id', canActivate: [CoachGuard], component: CoachProfileComponent },
  { path: 'coaches', component: CoachListComponent },
  {path: 'coaches/:id/coach-sessions', canActivate:[CoachGuard], component: CoachCoachingSessionListComponent},
  {path: 'coaches/:id/edit/information', canActivate: [CoachGuard, OwnProfileGuard], component: EditCoachInformationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachRoutingModule { }
