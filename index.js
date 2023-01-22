// Carlos Martinez 
// T32121046
var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var datos = q.query;
    var mensaje="Sea bienvenido al sistema usuario";
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(mensaje +":"+ datos.usuario);
    
    res.end();

}).listen(3030);

// esta funcion da un mensaje de bienvenida al usuario
// ingrese en el navegador: http://localhost:3030/?usuario=nombreusuario
// nombre usuario es el de su preferencia.
