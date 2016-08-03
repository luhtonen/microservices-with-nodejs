var http = require('http')

var server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World\n");
});

server.listen(8000);