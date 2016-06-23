import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'vote',
    template: `
    <div class="voter">
        <li class="glyphicon glyphicon-menu-up menu-button" [class.voted]="myVote == 1" (click)="voteUp()"></li>
        <span>{{votes + myVote}}</span>
        <li class="glyphicon glyphicon-menu-down menu-button" [class.voted]="myVote == -1" (click)="voteDown()"></li>
    </div>
    `,
    styles: [`
        .voter {
            width:20px;
            text-align:center;
        }
        .voted {
            color: orange;
        }
        .menu-button {
            cursor: pointer;
        }
    `]
})
export class VoteComponent {
    @Input() votes = 0;
    @Input() myVote = 0;
    @Output() vote = new EventEmitter();

    voteUp() {
        if (this.myVote < 1) {
            this.myVote += 1;
            this.vote.emit({myVote: this.myVote});
        }
    }

    voteDown() {
        if (this.myVote > -1) {
            this.myVote -= 1;
            this.vote.emit({myVote: this.myVote});
        }
    }
}
