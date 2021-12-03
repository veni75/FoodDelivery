import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:
    any[] | null,
    phrase: string,
    key: string = 'name',
  ): any[] | null {

    if (!Array.isArray(value) || !phrase || !key) {
      return value;
    }

    phrase = ('' + phrase).toLowerCase();

    const filtered = value.filter(item => {
      const iKey: string = ('' + item[key]).toLowerCase();
      return iKey.includes(phrase);
    });

    return filtered
  }
}