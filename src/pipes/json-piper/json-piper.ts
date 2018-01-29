import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the JsonPiperPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'jsonPiper',
})
export class JsonPiper implements PipeTransform {
  transform(value, args:string[]) : any {
    let keys = [];
    for (let key in value) {
      keys.push({key: key, value: value[key]});
    }
    return keys;
  }
}
