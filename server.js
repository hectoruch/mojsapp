// importar
var express = require('express');

// instanciar
var app = express();
app.use(express.static(__dirname + '/'));

// ruteo
app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.html');
});
app.get('/demo1', function(req, res){
  res.sendfile(__dirname + '/demos/demo1/index.html');
});

// escuchar
app.listen(9000);

console.log("Servidor Express escuchando en modo %s", app.settings.env);
