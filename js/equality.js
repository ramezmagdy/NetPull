//Case1
//var x = 1;
//var y = true;

//if (x === y) {
//    console.log("Equals");
//} else {
//    console.log("Not equals");
//}

//Case2
//1.
var x = 0;
//2.
//var x;
//3.
//var x = 0;
//4.
////var x = 1;

var type = typeof x;
if (type === 'undefined') {
    console.log('Not exist');
} else {
    console.log('Exist');
}

// == converts different to same type
// === no type converters