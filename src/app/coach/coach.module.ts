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
    CoachRoutingModule,
    UserModule
  ]
})
export class CoachModule { }
