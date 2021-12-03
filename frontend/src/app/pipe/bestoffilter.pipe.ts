import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bestoffilter'
})
export class BestoffilterPipe implements PipeTransform {

  transform(value: any[] | null, key: string | null, foodgroup: string | null, comp: string = 'myComponent'): any[] | null {

    if (!Array.isArray(value) || !key) {
      return value;
    }

    let result = value
      .map(item => ({
        id: item.id,
        foodName: item.foodName,
        foodGroup: item.foodGroup,
        myComponent: item[key]
      }))
      .filter(item => item.foodGroup === foodgroup)
      .sort(function (a: any, b: any): any {

        return b[comp] - a[comp];
      }
      );

    return result;

  }
}