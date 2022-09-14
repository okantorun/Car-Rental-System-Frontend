import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipeColor'
})
export class FilterPipeColorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
