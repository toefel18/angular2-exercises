import {Component, Input} from 'angular2/core';
import {TwitterTweetComponent} from "./twitter-tweet.component";

@Component({
    selector: 'twitter-feed',
    template: `
    <div *ngFor="#tweet of tweets">
        <twitter-tweet [tweet]="tweet"></twitter-tweet>
    </div>
    `,
    providers: [],
    directives: [TwitterTweetComponent]
})
export class TwitterFeedComponent {
    @Input() tweets;
}
