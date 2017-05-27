'use strict';
var obj = { a: 100, b: 200 };
var myVar = 10;

console.log('Before delete');
console.log(obj);
console.log(myVar);

delete obj.a;
//delete myVar;//ERROR
console.log('After delete' + obj);
console.log(obj);
console.log(myVar);