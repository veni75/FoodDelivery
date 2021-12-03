import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boolean'
})
export class BooleanPipe implements PipeTransform {

  transform(value: boolean | null): string | null {

    if (value) {
      return 'igen';
    }
    return 'nem';

  }
}