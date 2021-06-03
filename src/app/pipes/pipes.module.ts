import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransformSessionStatusPipe } from './transform-session-status.pipe';
import { FilterCoachByTopicPipe } from './filter-coach-by-topic.pipe';
import { FilterByFirstNameOrLastNameOrEmailPipe } from './filter-by-first-name-or-last-name-or-email.pipe';



@NgModule({
  declarations: [TransformSessionStatusPipe, FilterCoachByTopicPipe, FilterByFirstNameOrLastNameOrEmailPipe],
  imports: [
    CommonModule
  ],
  exports: [TransformSessionStatusPipe, FilterCoachByTopicPipe, FilterByFirstNameOrLastNameOrEmailPipe]
})
export class PipesModule { }
