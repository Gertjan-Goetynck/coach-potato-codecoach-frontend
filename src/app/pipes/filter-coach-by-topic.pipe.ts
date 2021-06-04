import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user';

@Pipe({
  name: 'filterCoachByTopic'
})
export class FilterCoachByTopicPipe implements PipeTransform {

  transform(coaches: User[], topicId: string): User[] {
    if (topicId === "") {
      return coaches;
    }
    return coaches.filter(coach => coach.coachProfile.coachTopics.some(topic => topic.topic.id === topicId));
  }
}
