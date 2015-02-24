var http = require('http');
var counter = 0;

var isThisLast = function(message){
  console.log('3 - isThisLast\'s message is: '+message);
};

var doThisFunction = function(res, func){
  setTimeout(function(){
    console.log('4 - doing doThisFunction');
  },3000)
  func("What's Up Last function being called?!");
};

var seconds = function(){
  var seconds = 0;
  var plural = "";
  setInterval(function(){
    seconds++;
    plural = (seconds > 1 ? "s" : "");
    console.log("It's been "+seconds+" second"+plural+"\n");
  },1000)
};

var doAnotherThing = function(res){
  console.log('2 - doing ANOTHER thing');
  doThisFunction(res, isThisLast);
};

http.createServer(function (req, res) {
  counter++;
  res.writeHead(200, {'Content-Type': 'text/plain'});
  setTimeout(function(){
    doAnotherThing(res);
  }, 0);
  console.log('1 - == END OF STACK == Ran this thing '+counter+' times')
  res.end('Hello World\n');
}).listen(3000);

seconds();
console.log('Server running at http://localhost:3000/');
