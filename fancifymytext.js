function Bigger(){
    var input = document.getElementById("inText1")
    input.style.fontSize = "24pt";
}

function Fancify(){
    var input = document.getElementById("inText1");
    input.style.fontWeight = "bold";
    input.style.color = "blue";
    input.style.textDecoration = "underline";
}
function Borify(){
    var input = document.getElementById("inText1");
    input.style.fontWeight = "normal";
    input.style.color = "black";
    input.style.textDecoration = "none";
}
function Moo(){
    var input =document.getElementById("inText1");
    input.value = input.value.toUpperCase();
    var parts = input.value.split(".");
    input.value = parts.join("Moo");
}