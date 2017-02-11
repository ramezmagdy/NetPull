var obj = function () {
    'use strict';
    var _this = this;
    _this.hello = 'hello';

    _this.greet = function () {
        console.log(_this.hello);
    };
    //option1
    this.delayGreetingO1 = function () {
        setTimeout(this.greet.bind(this), 1000);
    };

    _this.delayGreetingO2 = function () {
        setTimeout(_this.greet, 1000);
    };
};

var greeter = new obj();
greeter.delayGreetingO2();