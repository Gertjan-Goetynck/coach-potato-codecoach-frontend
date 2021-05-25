import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoachProfileComponent } from './coach-profile/coach-profile.component';
import { RouterModule } from '@angular/router';
import { CoachRoutingModule } from './coach-routing.module';
import { CoachMenuComponent } from './coach-menu/coach-menu.component';
import { CoachMainNavComponent } from './coach-main-nav/coach-main-nav.component';
import { CoachListComponent } from './coach-list/coach-list.component';



@NgModule({
  declarations: [
    CoachProfileComponent,
    CoachMenuComponent,
    CoachMainNavComponent,
    CoachListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoachRoutingModule
  ]
})
export class CoachModule { }
