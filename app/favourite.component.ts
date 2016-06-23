import {Component} from 'angular2/core';

@Component({
    selector: 'favourite',
    template: `
        <li class="glyphicon" 
            [class.glyphicon-star]="active" 
            [class.glyphicon-star-empty]="!active"
            (click)="onClick()"
            style="cursor: pointer">
    `
})
export class FavouriteComponent {
    active: boolean = false;
    
    onClick() {
        this.active = !this.active;
    }
}
