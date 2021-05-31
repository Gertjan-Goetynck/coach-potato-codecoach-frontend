import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateCoachSessionFormComponent} from "./create-coach-session-form/create-coach-session-form.component";

const routes: Routes = [
  { path: 'coaches/:id/requestsession', component: CreateCoachSessionFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachingSessionRoutingModule { }
