import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testpipe',
  standalone: true
})
export class TestpipePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number {
    return value*0.5;
  }

}
