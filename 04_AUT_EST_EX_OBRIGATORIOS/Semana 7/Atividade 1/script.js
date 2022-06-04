const numero = document.getElementById("numero");
const resultado = document.getElementById("resultado");

numero.addEventListener("click", () => {
	console.log("clicado")
});

function inputado(){
    resultado.innerHTML = "Quantidade selecionada: " + numero.value
}

function aumenta(){
    let numerx = Number(numero.value)
    numerx += 1
    numero.value = numerx
    resultado.innerHTML = "Quantidade selecionada: " + numerx
    // numero.value += 1  POR QUE ESSA LINHA NÃO FUNCIONA PRA ADICIONAR????
    // resultado.innerHTML = numero.value
}

function diminui(){
    numero.value -= 1
    resultado.innerHTML = "Quantidade selecionada: " + numero.value
}