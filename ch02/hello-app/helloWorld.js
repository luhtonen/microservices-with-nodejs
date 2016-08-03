/**
 * Created by luhtonen on 03/08/16.
 */

'use strict';

const http = require('http');

const server = http.createServer((request, response) => {
  console.log('called!');
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});
server.listen(8000);
console.log('Server running at http://127.0.0.1:8000');