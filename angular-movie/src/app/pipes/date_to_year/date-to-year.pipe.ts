import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateToYear'
})
export class DateToYearPipe implements PipeTransform {

  transform(value: string): string {
    const year = new Date(value).getFullYear();
    return year.toString();
  }

}
