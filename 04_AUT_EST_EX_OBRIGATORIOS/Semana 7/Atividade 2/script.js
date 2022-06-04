const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");

function troca(){
    let data1 = input1.value
    let data2 = input2.value
    input1.value = data2
    input2.value = data1
}
























let x = 0
function teste(){
   console.log("cliques")
    x += 1
    if(x > 50){
        document.getElementById("bode").style.backgroundColor = "pink"
        document.getElementById("bode").innerHTML = "PINK MODE"
    }
}

