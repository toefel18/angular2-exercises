import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({ name: 'multiply' })
export class MultiplyPipe implements PipeTransform {
    transform(value, args: any[]) {
        if (args && args[0]) {
            return value * args[0];
        }
        return value;
    }

}