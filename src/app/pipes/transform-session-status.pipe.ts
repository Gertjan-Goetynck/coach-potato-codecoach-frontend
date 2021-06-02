import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformSessionStatus'
})
export class TransformSessionStatusPipe implements PipeTransform {

  transform(status: string): string {
    switch (status) {
      case 'REQUESTED':
        return 'Requested';
      case 'AUTOMATICALLY_CLOSED':
        return 'Finished (automatically closed)';
      default:
        return status;
    }
  }

}
