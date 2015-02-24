var http = require('http');
var counter = 0;

var doAnotherThing = function(){
  console.log('1 - doing ANOTHER thing');
};

var isThisLast = function(message){
  console.log('2 - isThisLast\'s message is: '+message);
};

var doThisFunction = function(res, func){
  setTimeout(function(){
    console.log('4 - doing doThisFunction');
    res.end('Hello World\n');
  },3000)
  doAnotherThing();
  isThisLast("What's Up Last function being called?!");
};

http.createServer(function (req, res) {
  counter++;
  res.writeHead(200, {'Content-Type': 'text/plain'});
  doThisFunction(res, isThisLast);
  console.log('3 - == END OF STACK == Ran this thing '+counter+' times')
}).listen(3000);
console.log('Server running at http://localhost:3000/');
