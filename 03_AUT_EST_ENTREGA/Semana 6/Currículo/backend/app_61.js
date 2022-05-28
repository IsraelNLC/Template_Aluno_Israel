const express = require('express'); 
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const hostname = '127.0.0.1';

const port = 3061;
const sqlite3 = require('sqlite3').verbose();
const app = express();
const DBPATH = 'banco_de_dados.db';

app.use(express.static("../frontend/"));

app.use(express.json());


/* Definição dos endpoints */

/****** CRUD ******************************************************************/
app.get('/curriculo', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin',
	'*');
	
	var db = new sqlite3.Database(DBPATH);
	var sql = 'SELECT * FROM curriculo WHERE userId = 2';
	db.get(sql, [], (err, row) => {
	if (err) {
	throw err;
	}
	res.write('<!DOCTYPE html> \n<meta charset="UTF-8">\n<head> \n\t<title>MEUCURRÍCULO</title><style>.linha { border-bottom: solid 1px black;}</style>\n</head> \
	\n<body> \
	\n\t<div id="main"> \
	\n\t\t<h1>MEU CURRÍCULO</h1>');
	res.write('\n\t\t<div class="linha">' + row.title + '</div> \n\t</div>');
	res.write('\n</body> \n</html>');
	});
	});

// Retorna todos registros (é o R do CRUD - Read)
app.get('/acessos', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = 'SELECT * FROM curriculo ORDER BY name COLLATE NOCASE';
	db.all(sql, [],  (err, rows ) => {
		if (err) {
		    throw err;
		
		}
		const myJSON = rows;
		// console.log(myJSON[0].date);
		const MyJSONsize = Object.keys(myJSON).length;
		let nomes = []; //arrays que serão utilizados ao invés do JSON
		let datas = [];
		let ids = [];
	res.write('<!DOCTYPE html><html lang="pt-br"><head> <meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Currículo Israel</title> <link rel="stylesheet" href="stylesheet.css"> <link rel="shortcut icon" href="Assets/Img/inteli-logo.ico"> </head><body id="corpo"> <div> <h1 style="text-align: center;"> Israel Carvalho</h1> </div><button id="lua" onclick="darkMode()"> <img width="10px" height="10px" src="Assets/Img/lua.png"> </button> <h2> <div class="row"> <div id="infos" class="column font-correct"> <h2>●Informações</h2> <img class="centered curve-little" src="Assets/Img/eu.jpg" alt=""> <p>18 anos <br>Solteiro <br>Brasileiro</p><h2>Telefone</h2> <p>Celular - (37)99955-5421</p><h2>Endereço</h2> <p>São Paulo/SP</p><h2>Email</h2> <p>israelnuneslopescarvalho@gmail.com <br>israel.carvalho@sou.inteli.edu.br</p><h2>●Idiomas</h2> <p>Português &#8203 &#8203 ■■■■■</p><p>Inglês &#8203 &#8203 &#8203 &#8203 &#8203 &#8203 &#8203 &#8203 &#8203 ■■■■□</p><p>Espanhol &#8203 &#8203 &#8203 &#8203 ■□□□□</p><h2>●Informática</h2> <p>Photoshop - Intermediário <Br>Godot Engine - Básico <Br>HTML e CSS - Básico </p><h2>●Redes sociais</h2> <p>Instagram: <a href="https://www.instagram.com/_israelnc/" target="_blank" >@_israelnc</a> <br>&#8203</p></div><div id="resumo" class="column font-correct"> <h2>●Resumo Profissional</h2> <p>Atualmente com Ensino Médio completo, e cursando Engenharia de Computação no Instituto de Tecnologia e Liderança (Inteli), iniciando no mercado de trabalho, com uma breve experiência de projetos através da universidade.</p><p>Participou do desenvolvimento de um game, com proposta educativa para a ONG Constituição na Escola, e atualmente trabalha em um projeto de Capacity Management para a empresa Yamaha Motor Company.</p><p>Busco estagiar a partir de 2024, posteriormente concluir a graduação, e ingressar de vez no mercado de trabalho, com uma grande bagagem em programação, negócios e liderança, bem como a participação em estágios e diversos projetos.</p><h2>●Formação Acadêmica</h2> <p>Engenharia de Computação - Iniciado em 02/2022 (Término previsto para 12/2025)</p><button onclick="display()"> <img width="30px" src="Assets/Img/birthday.png"> </button> </div></div></h2> <footer style="text-align: center;"> <h3>Acessos</h3> <table class="tabelinha"><tr><th>id</th><th>Nome</th><th>Data</th></tr>');
	for(let i = 0; i < MyJSONsize; i++){ //Transforma os JSONs em arrays, ao adicionar cada elemento específico em um array relacionado, "name" no array "names"
		nomes.push(myJSON[i].name);
		datas.push(myJSON[i].date);
		ids.push(myJSON[i].id);
		console.log(nomes);
		console.log(datas);
		console.log(nomes[i]);
		res.write('<tr>  <td>'+ ids[i] +'</td><td>'+ nomes[i] +'</td><td>'+ datas[i] +'</td></tr>'); //finalmente adiciona cada um desses arrays em ordem pra formar a tabela em HTML
	}
	res.write('</table> <p>Última atualização - 20/05/2022</p></footer> <script src="https://code.jquery.com/jquery-3.6.0.js"></script> <script src="script.js"></script></body></html>');
	res.write('<form action="/adicionaracesso" method="post" ><input name="name" value="Insert Name"><input name="date" value="Insert Date"><button>ADICIONAR MEU ACESSO</button></form>');
	// res.write('<form action="/deletaracesso" method="delete" ><input name="id" value="Insert id"><button>SEND</button></form>') Descobri que o método delete não funciona
	});
	db.close(); // Fecha o banco
});

// Insere um registro (é o C do CRUD - Create)
app.post('/adicionaracesso', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "INSERT INTO curriculo (name, date) VALUES ('" + req.body.name + "', " + req.body.date + ")";
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	console.log(sql);
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		else console.log(sql);
	});
	db.close(); // Fecha o banco
	res.end();
});

// Atualiza um registro (é o U do CRUD - Update)
app.patch('/atualizaracesso', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "UPDATE curriculo SET name = '" + req.body.name + "' WHERE id = " + req.body.id;
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco
});

// Exclui um registro (é o D do CRUD - Delete)
app.delete('/deletaracesso', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "DELETE FROM curriculo WHERE id = " + req.body.id;
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco
});


/* Inicia o servidor */
app.listen(port, hostname, () => {
  console.log(`BD server running at http://${hostname}:${port}/`);
});
