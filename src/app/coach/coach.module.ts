import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoachProfileComponent } from './coach-profile/coach-profile.component';
import { RouterModule } from '@angular/router';
import { CoachRoutingModule } from './coach-routing.module';
import { CoachMenuComponent } from './coach-menu/coach-menu.component';
import { CoachMainNavComponent } from './coach-main-nav/coach-main-nav.component';
import { CoachListComponent } from './coach-list/coach-list.component';
import { UserMenuComponent } from '../user/user-menu/user-menu.component';
import { UserModule } from '../user/user.module';
import { CoachDetailComponent } from './coach-detail/coach-detail.component';
import { CoachDetailViewComponent } from './coach-detail-view/coach-detail-view.component';
import { CoachCoachingSessionListComponent } from './coach-coaching-session-list/coach-coaching-session-list.component';
import { PipesModule } from "../pipes/pipes.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CoachProfileComponent,
    CoachMenuComponent,
    CoachMainNavComponent,
    CoachListComponent,
    CoachDetailComponent,
    CoachDetailViewComponent,
    CoachCoachingSessionListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoachRoutingModule,
    UserModule,
    PipesModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CoachModule { }
