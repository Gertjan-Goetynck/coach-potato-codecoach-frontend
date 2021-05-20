import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoachProfileComponent } from './coach-profile/coach-profile.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CoachProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoachModule { }
