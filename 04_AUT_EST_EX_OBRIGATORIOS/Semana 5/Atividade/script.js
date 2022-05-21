
function getOp(){
    const number1 = document.getElementById("number1");
    const number2 = document.getElementById("number2");
    const onClick = function(){
        const operatorStr = this.id
        const operação = function(a, b){
            if(operatorStr == "+"){
                return a + b
            }
            else if(operatorStr == "-"){
                return a - b
            }
            else if(operatorStr == "*"){
                return a * b
            }
            else if(operatorStr == "/"){
                return a / b
            }
            else if(operatorStr == "//"){
                return Math.floor(a / b)
            }
            else if(operatorStr == "%"){
                return a % b
            }
    }
    console.log("Resposta " + operação(Number(number1.value), Number(number2.value)))
    var ans = operação(Number(number1.value), Number(number2.value))
    calculate("O resultado é: " + ans);
    }
      document.getElementById('+').onclick = onClick;
      document.getElementById('-').onclick = onClick;
      document.getElementById('*').onclick = onClick;
      document.getElementById('/').onclick = onClick;
      document.getElementById('//').onclick = onClick;
      document.getElementById('%').onclick = onClick;
      
}

function calculate(x){
    const result = document.getElementById("resultp")
    result.innerHTML = x
}

