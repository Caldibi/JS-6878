
function london(){

document.getElementById("tab1-content").classList.remove("noneDiv");
document.getElementById("tab2-content").classList.add("noneDiv");
document.getElementById("tab3-content").classList.add("noneDiv");
document.getElementById("tab1-button").style.backgroundColor= "gray";
document.getElementById("tab2-button").style.backgroundColor= "rgb(204, 203, 203)";
document.getElementById("tab3-button").style.backgroundColor= "rgb(204, 203, 203)";
}
function Paris(){
   
document.getElementById("tab2-content").classList.remove("noneDiv");
document.getElementById("tab1-content").classList.add("noneDiv");
document.getElementById("tab3-content").classList.add("noneDiv");
document.getElementById("tab1-button").style.backgroundColor= "rgb(204, 203, 203)";
document.getElementById("tab2-button").style.backgroundColor= "gray";
document.getElementById("tab3-button").style.backgroundColor= "rgb(204, 203, 203)";
}
function Tokyo(){
        
document.getElementById("tab3-content").classList.remove("noneDiv");
document.getElementById("tab1-content").classList.add("noneDiv");
document.getElementById("tab2-content").classList.add("noneDiv");
document.getElementById("tab1-button").style.backgroundColor= "rgb(204, 203, 203)";
document.getElementById("tab2-button").style.backgroundColor= "rgb(204, 203, 203)";
document.getElementById("tab3-button").style.backgroundColor= "gray";
}

