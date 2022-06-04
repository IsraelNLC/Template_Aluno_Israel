const input1 = document.getElementById("input1");
const resposta = document.getElementById("resposta");
const radioButtons = document.querySelectorAll('input[name="horario"]');
const precoDia = 200
const precoNoite = 100

function checar(){
    const valor = Number(input1.value) //Valor é o número de pessoas kk
    let hora
    if(valor > 0){
        for (const radioButton of radioButtons) {
            if (radioButton.checked){
            hora = radioButton.value;
            break;
            }
        }
        if(hora == "dia"){
            if(valor > 50){
                final = valor * precoDia * 0.6
                resposta.innerHTML = "Promoção!! O valor a pagar é de: " + final
            }
            else{
                final = valor * precoDia
                resposta.innerHTML = "O valor a pagar é de: " + final
            }
        }
        else if(hora == "noite"){
            if(valor > 50){
                final = valor * precoNoite * 0.8
                resposta.innerHTML = "Promoção!! O valor a pagar é de: " + final
            }
            else{
                final = valor * precoNoite
                resposta.innerHTML = "O valor a pagar é de: " + final
            }
        }
    }
    else{
        resposta.innerHTML = ""
        alert("Por favor, insira um valor válido")
    }
}


























//Easter egg
let x = 0
function teste(){
   console.log("cliques")
    x += 1
    if(x > 50){
        document.getElementById("bode").style.backgroundColor = "pink"
        document.getElementById("bode").innerHTML = "PINK MODE HEHEHE >:)"
    }
}