System.register(['angular2/core', './authors.component', './favourite.component', "./like.component", "./vote.component", "./twitter.service", "./twitter-feed.component", "./zippy.component", "./contact-form.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, authors_component_1, favourite_component_1, like_component_1, vote_component_1, twitter_service_1, twitter_feed_component_1, zippy_component_1, contact_form_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            },
            function (favourite_component_1_1) {
                favourite_component_1 = favourite_component_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            },
            function (vote_component_1_1) {
                vote_component_1 = vote_component_1_1;
            },
            function (twitter_service_1_1) {
                twitter_service_1 = twitter_service_1_1;
            },
            function (twitter_feed_component_1_1) {
                twitter_feed_component_1 = twitter_feed_component_1_1;
            },
            function (zippy_component_1_1) {
                zippy_component_1 = zippy_component_1_1;
            },
            function (contact_form_component_1_1) {
                contact_form_component_1 = contact_form_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(twitterService) {
                    this.tweets = twitterService.getTweets();
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <h1>My First Angular Applicatie Jonge</h1> \n        <authors></authors> \n        <favourite></favourite>\n        <br>\n        <like [counter]=\"10\" [active]=\"true\"></like>\n        <vote [votes]=\"15\" [myVote]=\"-1\"></vote>\n        <twitter-feed [tweets]=\"tweets\"></twitter-feed>\n        <zippy title=\"Hello, here's my panel\">Quontent</zippy>\n        <zippy title=\"SecondPanel, here's my panel\">Secundo Contento</zippy>\n        <contact-form></contact-form>\n    ",
                        providers: [twitter_service_1.TwitterService],
                        directives: [authors_component_1.AuthorComponent, favourite_component_1.FavouriteComponent, like_component_1.LikeComponent, vote_component_1.VoteComponent, twitter_feed_component_1.TwitterFeedComponent, zippy_component_1.ZippyComponent, contact_form_component_1.ContactFormComponent]
                    }), 
                    __metadata('design:paramtypes', [twitter_service_1.TwitterService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map