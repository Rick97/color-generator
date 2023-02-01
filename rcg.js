const hex=["0","1","2","3","4","5","6","7","8","9","0","A","B","C","D","E","F"];
const div=document.getElementsByClassName("div");
const color=document.getElementsByClassName("color");
const generate=document.getElementById("button");

function generateColor(){
    var color="";
    for(j=0; j<6; j++){
        color+=hex[Math.floor(Math.random()*12)];
    }
    color="#"+color;
    return color;
}

function generateColors(){
    for(i=0; i<4; i++){
        var currentColor=generateColor();
        div[i].style.backgroundColor = currentColor;
        color[i].innerText=currentColor;
    }
}

window.addEventListener("load", generateColors)
generate.addEventListener("click", generateColors);