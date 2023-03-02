import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'sentensecasepipe'
})
export class SentensecasepipePipe implements PipeTransform {

  transform(value:any) {
    let firstchar=value.charAt(0);
    let restchars=value.substring(1);
    let sentence=firstchar.toUpperCase()+restchars.toLowerCase();
    return sentence
  }

}
