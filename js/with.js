'use strict';
var obj = {
    a: {
        b: {
            c: 'hello'
        }
    }
};

var c = 'this is important';

//with(obj.a.b) {
//    console.log(c);
//}

//iife safe
(function (newVar) {
    console.log(newVar);
}(obj.a.b.c));