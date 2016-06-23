System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Tweet;
    return {
        setters:[],
        execute: function() {
            Tweet = (function () {
                function Tweet(mediaUrl, name, twitterHandle, message, likes, iLike) {
                    this.mediaUrl = mediaUrl;
                    this.name = name;
                    this.twitterHandle = twitterHandle;
                    this.message = message;
                    this.likes = likes;
                    this.iLike = iLike;
                }
                return Tweet;
            }());
            exports_1("Tweet", Tweet);
        }
    }
});
//# sourceMappingURL=tweet.js.map