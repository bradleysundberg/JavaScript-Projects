function my_Dictionary() { //This is the name of the function//
    var Animal = { //This is the variable and the characteristics of the variable//
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound: "Bark!"
    };
    delete Animal.Sound; //This is a statement that removes the key before its value is displayed//
    document.getElementById("Dictionary") .innerHTML = Animal.Sound; //This is an event handler that causes the animal sound to display when clicked//
}