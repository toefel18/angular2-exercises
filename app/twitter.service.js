System.register(["./tweet"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tweet_1;
    var TwitterService;
    return {
        setters:[
            function (tweet_1_1) {
                tweet_1 = tweet_1_1;
            }],
        execute: function() {
            TwitterService = (function () {
                function TwitterService() {
                }
                TwitterService.prototype.getTweets = function () {
                    return [
                        new tweet_1.Tweet("http://lorempixel.com/100/100/people?1", "Christophe", "@toefel", "Fellin Good 2day", 10, true),
                        new tweet_1.Tweet("http://lorempixel.com/100/100/people?2", "Tjernobiel", "@blaataap", "Me so ...., oh oh, me so ....", 7, false),
                        new tweet_1.Tweet("http://lorempixel.com/100/100/people?3", "Ralphy", "@puipui", "I dunno whot the fok un tokkin bout", 600, true),
                        new tweet_1.Tweet("http://lorempixel.com/100/100/people?4", "Kqosh", "@kosterr", "Fellin Good 2day, yea yea me 2 biatch", 32, true)
                    ];
                };
                return TwitterService;
            }());
            exports_1("TwitterService", TwitterService);
        }
    }
});
//# sourceMappingURL=twitter.service.js.map