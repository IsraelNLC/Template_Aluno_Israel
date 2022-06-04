const input1 = document.getElementById("input1");
const inteiros = [1,2,3,4,5,6,7,8,9,0];

function checar(){
    let sucesso = 0
    let fracasso = 0
    let text = input1.value
    let numeros = []
    let parenteses = []
    let hifen = []
    // Parenteses
    parenteses.push(text[0],text[3])
    console.log(parenteses)
    // Numeros
    numeros.push(text[1],text[2],text[4],text[5],text[6],text[7],text[8],text[10],text[11],text[12],text[13])
    console.log(numeros)
    // Hífen
    hifen.push(text[9])
    console.log(hifen)
    // Checagem
    if(parenteses[0] === "(" && parenteses[1] === ")"){ // Checa os parênteses
        if(text.length == 14){ // Checa o tamanho
            if(hifen[0] === "-"){ // Chega o hífen
                for(let i = 0; i < numeros.length; i++){ 
                    if(inteiros.indexOf(Number(numeros[i])) > -1){ // Checa se são todos números
                        console.log("tudo numero")
                        sucesso += 1
                    }
                    else{
                        fracasso += 1
                    }
                }
            }
            else{
                alert("Hífen errado")
            }
        }
        else{
            alert("Tamanho de telefone incorreto")
        }
    }
    else{
        alert("Parênteses errados")
    }
    
    if(sucesso == 11){
        alert("Seu número foi adicionado com sucesso")
    }
    else if(fracasso > 0){
        alert("Números errados")
    }
}
    //(xx)xxxxx-xxxx























//Easter egg
let x = 0
function teste(){
   console.log("cliques")
    x += 1
    if(x > 50){
        document.getElementById("bode").style.backgroundColor = "pink"
        document.getElementById("bode").innerHTML = "PINK MODE"
    }
}