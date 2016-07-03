import {Component} from 'angular2/core';
import {AuthorComponent} from './authors.component';
import {FavouriteComponent} from './favourite.component';
import {LikeComponent} from "./like.component";
import {VoteComponent} from "./vote.component";
import {TwitterService} from "./twitter.service";
import {Tweet} from "./tweet";
import {TwitterFeedComponent} from "./twitter-feed.component";
import {ZippyComponent} from "./zippy.component";
import {ContactFormComponent} from "./contact-form.component";
import {SignUpFormComponent} from "./signup-form.component";
import {ChangePasswordFormComponent} from "./change-password-form.component";

@Component({
    selector: 'my-app',
    template: `
        <h1>My First Angular Applicatie Jonge</h1> 
        <authors></authors> 
        <favourite></favourite>
        <br>
        <like [counter]="10" [active]="true"></like>
        <vote [votes]="15" [myVote]="-1"></vote>
        <twitter-feed [tweets]="tweets"></twitter-feed>
        <zippy title="Hello, here's my panel">Quontent</zippy>
        <zippy title="SecondPanel, here's my panel">Secundo Contento</zippy>
        <h1>Template Driven Form</h1>
        <contact-form></contact-form>
        
        <br/>
        <h1>Model Driven From</h1>
        <signup-form></signup-form>
        <h1>Exercise password validation form</h1>
        <change-password></change-password>
    `,
    providers: [TwitterService],
    directives: [
        AuthorComponent,
        FavouriteComponent,
        LikeComponent,
        VoteComponent,
        TwitterFeedComponent,
        ZippyComponent,
        ContactFormComponent,
        SignUpFormComponent,
        ChangePasswordFormComponent]
})
export class AppComponent {
    tweets: Tweet[];
    constructor(twitterService:TwitterService) {
        this.tweets = twitterService.getTweets();
    }
}