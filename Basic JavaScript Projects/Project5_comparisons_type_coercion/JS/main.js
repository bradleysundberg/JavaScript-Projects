document.write(typeof "Word"); //This is typeof expression that would display "string//

let num = 33;  //This is an expression combining a string and a number, it should display "33 is the answer"//
let str = " is the answer.";  
let result = num + str; 
console.log(result);

document.write(10 == 10); //This checks that the data on either given side is equal to the other, in this case it would be true//

X = 10;
Y = 10;
document.write(X === Y); //This checks what the double equals signs check but also that the type of data are the same, in this case it would be true//

document.write(5 > 2 && 10 > 4); //This checks whether both variables are true, in this case it would be//

document.write(5 > 10 || 10 > 4); //This check what the && checks except it will return true or false based on one or the other being so, in this case it is true//

function not_Function() { //This checks whether comething is false or not, int this case it is true because the variable is false//
    document.getElementById("Not") .innerHTML = ! (20 > 20);
}