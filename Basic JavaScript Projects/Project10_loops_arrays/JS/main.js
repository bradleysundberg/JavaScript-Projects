function count_To_Ten() { //This function repeatedly executes a given code while a particular condition is present
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten") .innerHTML = Digit;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() { //This function repeats a section of code a number of times
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments") .innerHTML = Content;
}

function cat_pics() { //This function defines the indexes and properties of an object
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat") .innerHTML = "In this picture, the cat is " +
    Cat_Picture[2] + ".";
}

var X = 82; 
document.write(X);
{
    let X = 33;  //This function declares a variable that can only be accessed within a function but not outside it
    document.write("<br>" + X);
}
document.write("<br>" + X);