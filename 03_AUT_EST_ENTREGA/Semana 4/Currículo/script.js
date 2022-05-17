var click = false

function display(){
    if(click === false){
        createniver();
        click = true;
    }
    else{
        document.getElementById("newp").remove();
        click = false;
    }

}

function createniver(){
    const paragraph = document.createElement("p");
    const niver = document.createTextNode("Oii, a última atualização foi feita no dia do meu aniversário!! Você descobriu um easter egg ;)")
    paragraph.setAttribute("id", "newp")
    paragraph.appendChild(niver)

    document.getElementById("resumo").appendChild(paragraph);
}

