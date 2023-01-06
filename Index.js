console.log("Initialized  Index.js");

//Call To Action Script

var pop = document.getElementById("Pop");

function CTA(){
    console.log("Closed Popup")
    pop.style.width = "0px";
    pop.style.height = "0px";
    pop.style.visibility = "invisible";
    pop.style.zIndex = "-1";
}