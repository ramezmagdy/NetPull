//NewFiles

'use strict';

//---------------------------------------------------
//Example 1
//---------------------------------------------------
//var add = function (x, y) {
//    var z = x + y;
//    return z;
//};

//var sum = add(5, 7);

////console.log(sum);

//output.innerHTML = sum;
//---------------------------------------------------
//Example 2
//---------------------------------------------------
//var constant = 32;

//function celsiusToFarenheit(temperature) {
//    var multiplier = 9;
//    var divisor = 5;
//    var farenheitTemp = temperature * multiplier / divisor + constant;
//    return farenheitTemp;
//}

//output.innerHTML = celsiusToFarenheit(100);
//---------------------------------------------------
//Example 3
//---------------------------------------------------
//function hypotenuse(side1, side2) {
//    function square(a) {
//        return a * a;
//    }

//    return Math.sqrt(square(side1) + square(side2));
//}

//output.innerHTML = hypotenuse(3, 9);
//---------------------------------------------------
//Example 4
//---------------------------------------------------
//var scope = 'global';

//function testScope() {
//    var scope = "local";
//    var innerFunc = function () {
//        return scope;
//    };
//    return innerFunc;
//}

//var answer = testScope()();
//output.innerHTML = answer;

//---------------------------------------------------
//Example 5
//---------------------------------------------------
function expFunc(num, exp) {
  if (exp === 0) {
    return 1;
  }

  return num * expFunc(num, exp - 1);
}

var answer = expFunc(3, 4);
output.innerHTML = answer;
