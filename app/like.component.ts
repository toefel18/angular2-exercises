import {Component, Input} from 'angular2/core';
import {MultiplyPipe} from "./multiply.pipe";

@Component({
    selector: 'like',
    template: `
        <li class="glyphicon glyphicon-heart" 
            [class.glyphicon-heart-active]="active"
            (click)="onClick()">{{counter | multiply:1 }} {{title?.name}}</li>
    `,
    styles: [`
        .glyphicon-heart {
            color: #ccc;
            cursor: pointer;
        }
        .glyphicon-heart-active {
            color: deeppink;
        }
    `],
    pipes: [MultiplyPipe]
})
export class LikeComponent {
    @Input() active:boolean = false;
    @Input() counter = 0;

    title;
    // title = {
    //     name: "likes"
    // };

    onClick() {
        this.active = !this.active;
        this.counter = this.counter + (this.active ? +1 : -1);
    }
}
