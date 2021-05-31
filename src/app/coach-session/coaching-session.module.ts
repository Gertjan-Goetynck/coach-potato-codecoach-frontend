import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCoachSessionFormComponent } from './create-coach-session-form/create-coach-session-form.component';
import {CoachingSessionRoutingModule} from "./coaching-session-routing.module";
import {LoginFormComponent} from "../user/login-form/login-form.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {NgbDatepickerModule, NgbTimepickerModule} from "@ng-bootstrap/ng-bootstrap";



@NgModule({
  declarations: [
    CreateCoachSessionFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CoachingSessionRoutingModule,
    NgbDatepickerModule,
    NgbTimepickerModule
  ]
})
export class CoachingSessionModule { }
