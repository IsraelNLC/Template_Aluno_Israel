//Arquivo js
function ex(){
    var v0 = document.getElementById("v0").value;
    const g = 10;

    hmax = v0/2*g;
    ts = v0/g;
    document.getElementById("results").innerHTML = "A altura máxima será de " + hmax + " e o tempo de subida será de " + ts
}

function popup(){
     var popup = prompt("Digite um valor");
     if (typeof popup === "string"){
         console.log("oi");
         document.getElementById("value").innerHTML = "O valor de texto indicado é: " + popup}
    else if (typeof popup === "Int"){
        document.getElementById("value").innerHTML = "O valor numérico indicado é: " + popup}
}

function changeimg(source){
    document.getElementById("mario").src = source
}

// Quero que ele detecte se o que eu dei no popup foi um número ou um texto, e se for número, transformar de string pra int/float pra ativar o elif
// ParseInt() ou parseFloat() muda o tipo da var