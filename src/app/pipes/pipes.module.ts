import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransformSessionStatusPipe } from './transform-session-status.pipe';



@NgModule({
  declarations: [TransformSessionStatusPipe],
  imports: [
    CommonModule
  ],
  exports: [TransformSessionStatusPipe]
})
export class PipesModule { }
