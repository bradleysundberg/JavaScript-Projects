function full_Sentence() { //This function combines variables//
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate") .innerHTML = whole_sentence;
}

function slice_Method() { //This function removes words from sentence//
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27, 33);
    document.getElementById("Slice") .innerHTML = Section;
}

function string_Method() { //This function return a number as a string//
    var X = 182;
    document.getElementById("Numbers_to_string") .innerHTML = X.toString();
}

function precision_Method() { //This function formats a number to a specified length//
    var X = 12938.3012987376112;
    document.getElementById("Precision") .innerHTML = X.toPrecision(10);
}