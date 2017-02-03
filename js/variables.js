"use strict";
var myVariable = 10;

function func() {
    //var myVariable;
    myVariable = 25;
}

func();
console.log(myVariable);
