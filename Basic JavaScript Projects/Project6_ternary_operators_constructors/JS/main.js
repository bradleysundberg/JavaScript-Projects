function checkNumber() { //This function checks whether the entered number is even or odd//
    let num = document.getElementById("num").value;
    let result = num % 2 == 0 ? "Even" : "Odd";
    document.getElementById("result").innerHTML = "The number is " + result;
  }

function Vehicle(Make, Model, Year, Color) { //This function allows us to set the traits of our objects//
  this.Vehicle_Make = Make;
  this.Vehicle_Model = Model;
  this.Vehicle_Year = Year;
  this.Vehicle_color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //These variables are the traits of the objects//
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() { //This function determines what kind of car Erik drives//
  document.getElementById("Keywords_and_Constructors") .innerHTML =
  "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
  " manufactured in " + Erik.Vehicle_Year;
}

function count_Function() { //This function has another function nested inside it//
  document.getElementById("Counting") .innerHTML = Count();
  function Count() {
    var Starting_point = 9;
    function Plus_one() {Starting_point += 1;}
    Plus_one();
    return Starting_point;
  }
}