var clickCake = false;
var clickDark = false;
var cinzinha = "var(--cinzinha)";
var texts = $("#infos").text();

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

const rodape = document.getElementById("rodape")
rodape.onload = geraTabela()

// Requisição por JQuery
// function geraTabela(){
// $.getScript("/acessos", function(rows){
//     console.log(rows + "esse é o Jquery")
//     let MyJson = JSON.parse(rows)
//     let MyJsonSize = MyJson.length
//     for(let i = 0; i < MyJsonSize; i++ ){
//         document.getElementById("tabela").innerHTML += '<tr>  <td>'+ MyJson[i].id +'</td><td>'+ MyJson[i].name +'</td><td>'+ MyJson[i].date +'</td></tr>'
//     }
// });
// }


// Requisição por Ajax
function geraTabela(){
    //Objeto request
    let request = new XMLHttpRequest(); 
    //Criar a função do pedido
    request.onreadystatechange = function(){
        console.log(this.responseText + "esse é o ajax")
        let MyJson = JSON.parse(this.responseText)
        console.log(MyJson[0].name + "jaisonnnn")
        let MyJsonSize = MyJson.length
        document.getElementById("tabela").innerHTML = `<tr><td>id</td><td>Nome</td><td>Data</td></tr>`
        for(let i = 0; i < MyJsonSize; i++ ){
            document.getElementById("tabela").innerHTML += '<tr id="' + MyJson[i].id + '"> <td>' + MyJson[i].id +'</td><td>'+ MyJson[i].name +'</td><td>'+ MyJson[i].date +'</td><td>' + '<a href="#" class="btndelete" > Remover </a>'  + '</td> </tr>'
        }
        console.log(JSON.parse(this.responseText))
    }

    //Faz o pedido
    url = "http://localhost:3061/acessos"
    request.open("GET", url, true);
    request.send();
}

// Post por ajax
function enviaAcesso(){
    const nameInput = document.getElementById("input1").value
    const dateInput = Number(document.getElementById("input2").value)
    url = "/adicionaracesso"
    $.ajax({
        type: "POST",
        url: url,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify(
            {
                "name": nameInput,
                "date": dateInput
            }
        )
    });
}

// Delete por ajax
$(document).ready(function(){
    $('body').on('click', '.btndelete', function (e) {
        idTable = $(this).closest('tr').attr('id')
      $.ajax({
        url: "/deletaracesso",
        data: { id: idTable},
        //cache: false,
        //contentType: false,
        //processData: false,
        //mimeType: "multipart/form-data",
        type: "Delete",
        dataType: "Json",
        // success: function(result) {
        //   if (result.Success) {
        //     $("#tr39").remove();
        //   }
        //   eval(result.Script);
        // },
        // error: function() {
        //   alert("Deu errado meu");
        // }
      });
      $("#"+idTable).remove();
    });
  });