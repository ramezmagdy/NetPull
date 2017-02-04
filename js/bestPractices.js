//hoisting
'use strict';
//variable first
var x = 10;

//functions next
function print(input) {
    //variables first
    var localX = input;
    //functions next
    function log() {
        console.log(localX);
    }
    //run code
    log();
}
//run code
print(x);