import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let keywords = args.split(' ');
    keywords.forEach(element => {
      if (element) {
        let exp = new RegExp(element, 'gi')
        value = value.replace(exp, '<span class="highlight">$&</span>');
      }
    });
    return value;
  }

}
