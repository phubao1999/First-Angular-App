import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-child',
    template: `<button (click)="addForParent();">+</button>
    <button (click)="subForParent();">-</button>
    `
})

export class ChildComponent {
    @Output() myClick = new EventEmitter();

    addForParent(){
        this.myClick.emit(true);
    }

    subForParent(){
        this.myClick.emit(false);
    }
}