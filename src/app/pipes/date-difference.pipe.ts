import { Pipe, PipeTransform } from '@angular/core';
import pluralize from 'pluralize';

@Pipe({
  name: 'dateDifference',
  standalone: true,
})
export class DateDifferencePipe implements PipeTransform {
  transform(startDate: Date, endDate: any): string {
    let compareEndDate = endDate;
    let returnString: string = '';

    if (typeof endDate === 'string') {
      compareEndDate = new Date();
    }
    let years = compareEndDate.getFullYear() - startDate.getFullYear();
    let months = compareEndDate.getMonth() - startDate.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    if (years > 0) {
      returnString += `${years} ${pluralize('years', years)} `;
    }
    if (months > 0) {
      returnString += `${months} ${pluralize('months', months)}`;
    }
    return returnString;
  }
}
