import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipeBrand'
})
export class FilterPipeBrandPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
