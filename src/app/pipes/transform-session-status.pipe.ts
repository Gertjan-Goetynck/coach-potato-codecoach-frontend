import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformSessionStatus'
})
export class TransformSessionStatusPipe implements PipeTransform {

  transform(status: string): string {
    switch (status) {
      case 'REQUESTED':
        return 'Requested';
      case 'ACCEPTED':
        return 'Accepted';
      case 'DECLINED':
        return 'Declined';
      case 'AUTOMATICALLY_CLOSED':
        return 'Finished (automatically closed)';
      case 'DONE_WAITING_FEEDBACK':
        return 'Done - Awaiting Feedback';
      default:
        return status;
    }
  }

}
