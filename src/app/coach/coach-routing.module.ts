import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachProfileComponent } from './coach-profile/coach-profile.component';

const routes: Routes = [
  { path: 'coach/:id', component: CoachProfileComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachRoutingModule { }
