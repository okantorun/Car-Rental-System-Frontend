import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipeCar'
})
export class FilterPipeCarPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
