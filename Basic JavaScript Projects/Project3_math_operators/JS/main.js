function myFunction() {
    var sum = 2 + 2;
    document.getElementById("demo").innerHTML = "2 + 2 = " + sum;
  }

function subtraction_function() {
    var Subtraction = 5 - 2;
    document.getElementById("demo2") .innerHTML = "5 - 2 = " + Subtraction;
}

function multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("demo3") .innerHTML = "6 X 8 = " + simple_Math;
}

function division() {
    var simple_Math = 48 / 6;
    document.getElementById("demo4") .innerHTML = "48 / 6 = " + simple_Math;
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("demo5") .innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_Operator() {
    var x = 10;
    document.getElementById("demo6") .innerHTML = -x;
}

var X = 5;
X++;
document.write(X);

var X = 5.25;
X--;
document.write(X);

window.alert(Math.random());

window.alert(Math.random() * 100);

document.getElementById("test").innerHTML = Math.round(4.6);