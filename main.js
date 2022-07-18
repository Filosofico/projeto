var http = require("http");
const nome="Nicolas";
const calcular= 100/3^(4+3)/5 ;

http.createServer(function (request, response) {
// Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Aula Pratica\n'+ nome + " resultado " + calcular.toString());
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');