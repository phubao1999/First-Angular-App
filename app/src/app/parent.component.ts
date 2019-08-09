import { Component } from '@angular/core';

@Component({
    selector: 'app-parent',
    template: `
        <button class="btn btn-secondary btn-out-line-dark" (click)="child.value = child.value + 1">Add For Children Component</button>
        <app-child #child></app-child>
        `
})

export class ParentComponent {
    value = 0;
}