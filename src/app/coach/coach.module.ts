import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoachProfileComponent } from './coach-profile/coach-profile.component';
import { RouterModule } from '@angular/router';
import { CoachRoutingModule } from './coach-routing.module';
import { CoachMenuComponent } from './coach-menu/coach-menu.component';



@NgModule({
  declarations: [
    CoachProfileComponent,
    CoachMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoachRoutingModule
  ]
})
export class CoachModule { }
