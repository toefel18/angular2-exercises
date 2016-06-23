import {Component, Input} from 'angular2/core';

@Component({
    selector: 'zippy',
    template: `
    <div class="panel panel-default">
        <div class="panel-heading" (click)="toggle()">
            {{ title }}
            <span class="glyphicon glyphicon-chevron-up pull-right" 
                  [ngClass]="{
                    'glyphicon-chevron-up': expanded,
                    'glyphicon-chevron-down': !expanded
                  }"></span>
        </div>
        <div class="panel-body" [hidden]="!expanded">
            <ng-content></ng-content>
        </div>
    </div> 
    `
})
export class ZippyComponent {
    @Input() title: string;
    expanded: boolean = true;

    toggle() {
        this.expanded = !this.expanded;
    }
}
