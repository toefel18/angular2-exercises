System.register(['angular2/core', "./multiply.pipe"], function(exports_1, context_1) {
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
    var core_1, multiply_pipe_1;
    var LikeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (multiply_pipe_1_1) {
                multiply_pipe_1 = multiply_pipe_1_1;
            }],
        execute: function() {
            LikeComponent = (function () {
                function LikeComponent() {
                    this.active = false;
                    this.counter = 0;
                }
                // title = {
                //     name: "likes"
                // };
                LikeComponent.prototype.onClick = function () {
                    this.active = !this.active;
                    this.counter = this.counter + (this.active ? +1 : -1);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], LikeComponent.prototype, "active", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], LikeComponent.prototype, "counter", void 0);
                LikeComponent = __decorate([
                    core_1.Component({
                        selector: 'like',
                        template: "\n        <li class=\"glyphicon glyphicon-heart\" \n            [class.glyphicon-heart-active]=\"active\"\n            (click)=\"onClick()\">{{counter | multiply:1 }} {{title?.name}}</li>\n    ",
                        styles: ["\n        .glyphicon-heart {\n            color: #ccc;\n            cursor: pointer;\n        }\n        .glyphicon-heart-active {\n            color: deeppink;\n        }\n    "],
                        pipes: [multiply_pipe_1.MultiplyPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], LikeComponent);
                return LikeComponent;
            }());
            exports_1("LikeComponent", LikeComponent);
        }
    }
});
//# sourceMappingURL=like.component.js.map