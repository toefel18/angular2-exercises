System.register(['angular2/core', "./like.component"], function(exports_1, context_1) {
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
    var core_1, like_component_1;
    var TwitterTweetComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            }],
        execute: function() {
            TwitterTweetComponent = (function () {
                function TwitterTweetComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], TwitterTweetComponent.prototype, "tweet", void 0);
                TwitterTweetComponent = __decorate([
                    core_1.Component({
                        selector: 'twitter-tweet',
                        template: "\n      <div>\n        <div class=\"media\">\n          <div class=\"media-left\">\n            <a href=\"#\">\n              <img class=\"media-object\" src=\"{{tweet.mediaUrl}}\" alt=\"{{tweet.twitterHandle}}\">\n            </a>\n          </div>\n          <div class=\"media-body\">\n            <h4 class=\"media-heading\">{{tweet.name}} <span class=\"media-heading twitter-handle\">{{tweet.twitterHandle}}</span></h4>\n            <p class=\"text-primary\">{{tweet.message}}</p>\n            <like [active]=\"tweet.iLike\" [counter]=\"tweet.likes\"></like>\n          </div>\n        </div>\n     </div>\n    ",
                        styles: ["\n        .twitter-handle {\n            color:gray;\n        }\n        \n        .media {\n            margin-bottom: 20px;\n        }\n    "],
                        directives: [like_component_1.LikeComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TwitterTweetComponent);
                return TwitterTweetComponent;
            }());
            exports_1("TwitterTweetComponent", TwitterTweetComponent);
        }
    }
});
//# sourceMappingURL=twitter-tweet.component.js.map