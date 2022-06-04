var clickCake = false;
var clickDark = false;
var cinzinha = "var(--cinzinha)";
var texts = $("#infos").text();


function print(x){
    console.log(x);
};

print(texts);

function darkMode(){
    if(clickDark === false){
        $("p, h3, h2, h1, th, td").css("color", "white"); //Altera os textos
        $("html").css("background-color", "black"); //Altera o bckg
        $("#infos h2, #infos p").css("color", "black"); //Reverte os txt do info
        clickDark = true;
    }
    else{
        $("html").css("background-color", cinzinha);
        $("p, h3, h2, h1, th, td").css("color", "black");
        clickDark = false;
    }

}

function display(){
    // document.getElementById("corpo").style = 'background-color: yellow'
    if(clickCake === false){
        createtext();
        clickCake = true;
    }
    else{
        document.getElementById("newp").remove();
        clickCake = false;
    }
}

function createtext(){
    const paragraph = document.createElement("p");
    const easteregg = document.createTextNode("Parabéns!! Você descobriu um easter egg ;)");
    paragraph.setAttribute("id", "newp");
    paragraph.appendChild(easteregg);

    document.getElementById("resumo").appendChild(paragraph);
}



