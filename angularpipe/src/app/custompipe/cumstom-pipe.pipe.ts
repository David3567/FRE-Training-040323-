import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cumstomPipe',
})
export class CumstomPipePipe implements PipeTransform {

  transform(value: String, ...args: unknown[]): unknown {
    if (value.length > 15) {
      return value.slice(0, 15) + "...";
    } else {
      return value;
    }
  }

}
