import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user';

@Pipe({
  name: 'filterByFirstNameOrLastNameOrEmail'
})
export class FilterByFirstNameOrLastNameOrEmailPipe implements PipeTransform {

  transform(coaches: User[], searchText: string): User[] {
    searchText = searchText.toLowerCase();
    if (searchText === "" || searchText.length <= 2) {
      return coaches;
    }
    return coaches.filter(coach => coach.firstName.toLowerCase().includes(searchText) || coach.lastName.toLowerCase().includes(searchText) || coach.email.toLowerCase().includes(searchText));
  }
}