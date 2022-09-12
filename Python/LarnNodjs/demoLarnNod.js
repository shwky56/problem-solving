let http = require('http');

http.createServer((requsest, response) => {
    response.writeHead(200, {'Contant-Type': 'text/plain'});
    response.end('hello world\n');
}).listen(8081);