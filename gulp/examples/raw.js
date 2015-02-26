function awesome(params){
  var privateFunction = function(thing){
    return thing + " was ran through the private function";
  }

  return {
    params: params,
    privateThing: privateFunction(params.foo)
  }
}

var awesomeSauce = awesome({
  foo: "bar",
  bar: "foo"
});

console.log(awesomeSauce);
