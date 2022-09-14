import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monthlyPriceAdded'
})
export class MonthlyPriceAddedPipe implements PipeTransform {

  transform(dailyPrice: number, discountRate:number): number {
    return (dailyPrice*30)*discountRate/100;
  }

}
