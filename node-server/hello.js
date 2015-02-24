var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  console.log("I am going to write 'Hello World'");
  res.end('Hello World\n');
  console.log("I wrote 'Hello World'");
}).listen(3000);

console.log('Server running at http://localhost:3000/');
