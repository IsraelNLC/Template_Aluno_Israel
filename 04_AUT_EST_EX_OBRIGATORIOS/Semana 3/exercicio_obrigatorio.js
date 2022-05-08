//Arquivo js
function ex(){
    var v0 = document.getElementById("v0").value;
    const g = 10;

    hmax = v0/2*g;
    ts = v0/g;
    document.getElementById("results").innerHTML = "A altura máxima será de " + hmax + " e o tempo de subida será de " + ts
}