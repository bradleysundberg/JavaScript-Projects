function subtraction_function() {
    var Subtraction = 5 - 2;
    document.getElementById("Math") .innerHTML = "5 - 2 = " + Subtraction;
}

function multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("Math") .innerHTML = "6 X 8 = " + simple_Math;
}

function division() {
    var simple_Math = 48 / 6;
    document.getElementById("Math") .innerHTML = "48 / 6 = " + simple_Math;
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math") .innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_Operator() {
    var x = 10;
    document.getElementById("Math") .innerHTML = -x;
}

var X = 5;
X++;
document.write(X);

var X = 5.25;
X--;
document.write(X);

window.alert(Math.random());

window.alert(Math.random() * 100);

document.getElementById("Math").innerHTML = Math.round(4.6);