import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ name: 'roundNum' })

export class RoundPipe implements PipeTransform {
    transform(value: number, isUpper: boolean, addTo: number): number {
        if (isUpper) {
            return Math.ceil(value + addTo);
        } else {
            return Math.floor(value);
        }
    }
}