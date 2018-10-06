var names = ['Krishna', 'Rama','Siva'];

names.map((element,index) => {
    console.log(index, element)
});

function init() {
    var name = 'Mozilla'; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
        console.log(name); // use variable declared in the parent function    
    }
    displayName();    
}
init();

function makeAdder(x) {
    return function(y) {
      return x + y;
    };
  }
  
  var add5 = makeAdder(5);
  var add10 = makeAdder(10);
  
  console.log(add5(2));  // 7
  console.log(add10(2)); // 12

  function* generator(i) {
    yield i;
    yield i + 10;
    yield i + 20;
    
  }
  
  var gen = generator(10);
  
  console.log(gen.next().value);
  // expected output: 10
  console.log(gen.next().value);
  console.log(gen.next().value);

  function* idMaker() {
    var index = 0;
    while (index < index+1)
      yield index++;
  }
  
  var gen = idMaker();
  
  console.log(gen.next().value); // 0
  console.log(gen.next().value); // 1
  console.log(gen.next().value); // 2
  console.log(gen.next().value); // 3
  