function My_First_Function() { //This is the first function//
    var str = "This is the button text!"; //This is a string containing a variable//
    document.getElementById("Button_Text") .innerHTML = str; //This alters the button text in HTML//
}

function myFunction() { //This is the second function//
    var sentence = "I am learning"; //This is a variable containing the first string//
    sentence += " a lot from this book!"; //This is a variable containing the second string//
    document.getElementById("Concatenate") .innerHTML = sentence; //This concatenates the strings//
}