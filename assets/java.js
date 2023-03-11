
var question = ""; 

function choice(){
    let x = document.getElementById("form1");
    let texte = "";
    let i;
    for (i = 0; i < x.length; i++) {
        texte += x.elements[i].value + "<br>";
    }
    question = texte;
    flip(); 
}

function flip(){
    
}
