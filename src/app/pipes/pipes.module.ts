import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransformSessionStatusPipe } from './transform-session-status.pipe';
import { FilterCoachByTopicPipe } from './filter-coach-by-topic.pipe';



@NgModule({
  declarations: [TransformSessionStatusPipe, FilterCoachByTopicPipe],
  imports: [
    CommonModule
  ],
  exports: [TransformSessionStatusPipe, FilterCoachByTopicPipe]
})
export class PipesModule { }
