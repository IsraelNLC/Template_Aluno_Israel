

function oi(){
    for(var i = 0; i < 50; i++){
        const paragraph = document.createElement("p");
        const niver = document.createTextNode("Eu te amo isso tudo aqui ó")
        paragraph.setAttribute("id", "newp")
        paragraph.appendChild(niver)

        document.getElementById("new").appendChild(paragraph);
    }
    const paragraph = document.createElement("p");
    const niver = document.createTextNode("Se eu adicionar mais eu quebro a página, mas é isso vezes infinito heheheh (mas pode apertar dnv)")
    paragraph.setAttribute("id", "newp")
    paragraph.appendChild(niver)

    document.getElementById("new").appendChild(paragraph);
}