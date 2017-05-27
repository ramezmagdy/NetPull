'use strict';
var toPrint = 'print me';

function print(out) {
    //Wrong leak
    //stringToPrint = out;

    //Correct Declaration
    var stringToPrint = out;
    console.log(stringToPrint);
}

print('Hello');

//Wrong leak
//console.log(stringToPrint);