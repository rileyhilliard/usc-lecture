var http = require('http');
var fs = require('fs');
var message = "This is the Message that is going to be written to a file";

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  fs.writeFile("test.txt", message, function(err) {
    if(err) {
      res.end(err);
    } else {
      console.log("The file was saved!");
      res.end('The file was saved!\n');
    }
  });
}).listen(3000);

console.log('Server running at http://localhost:3000/');
