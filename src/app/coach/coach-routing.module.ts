import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachGuard } from '../auth/coach.guard';
import { CoachProfileComponent } from './coach-profile/coach-profile.component';
import { CoachListComponent } from "./coach-list/coach-list.component";
import { CoachDetailComponent } from './coach-detail/coach-detail.component';
import { CoachDetailViewComponent } from './coach-detail-view/coach-detail-view.component';

const routes: Routes = [
  { path: 'coaches/:id/details', component: CoachDetailViewComponent },
  { path: 'coaches/:id', canActivate: [CoachGuard], component: CoachProfileComponent },
  { path: 'coaches', component: CoachListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachRoutingModule { }
