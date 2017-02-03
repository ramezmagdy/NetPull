//hoisting
'use strict';
//variable first
var x = 10;

//functions next
function print(input) {
    //variables first
    var localX = 0;
    //functions next
    function log() {
        console.log(localX);
    }
    //run code
    console.log(input);
}
//run code
print(x);