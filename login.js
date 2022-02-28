const express = require('express');
const path = require('path');
const app = express();

// Para pegar dados da paginna

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join('assets')))


// Usuário criado

let user_admin = 'gabriel';
let password_admin = '123';


// Vericação de usuário
app.post('/auth', function(request, response) {

	let username = request.body.username;
	let password = request.body.password;
  
  if(user_admin == username && password_admin == password) {
    response.redirect('/sucess');
  } else {
    response.redirect('/invalid');
  }

});

// Root

app.get('/', function(request,response){
  response.sendFile(path.join(__dirname + "/index.html"));
});

// 
app.get('/sucess', function(request,response){
  response.sendFile(path.join(__dirname + "/sucess.html"));
});

app.get('/invalid', function(request,response){
  response.sendFile(path.join(__dirname + "/invalid.html"));
});


app.listen(9000);
