import {Component, Input} from 'angular2/core';
import {LikeComponent} from "./like.component";

@Component({
    selector: 'twitter-tweet',
    template: `
      <div>
        <div class="media">
          <div class="media-left">
            <a href="#">
              <img class="media-object" src="{{tweet.mediaUrl}}" alt="{{tweet.twitterHandle}}">
            </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading">{{tweet.name}} <span class="media-heading twitter-handle">{{tweet.twitterHandle}}</span></h4>
            <p class="text-primary">{{tweet.message}}</p>
            <like [active]="tweet.iLike" [counter]="tweet.likes"></like>
          </div>
        </div>
     </div>
    `,
    styles: [`
        .twitter-handle {
            color:gray;
        }
        
        .media {
            margin-bottom: 20px;
        }
    `],
    directives: [LikeComponent]
})
export class TwitterTweetComponent {
    @Input() tweet;
}
