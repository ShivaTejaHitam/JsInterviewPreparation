// Object literal Syntax
var shivateja = {
    name : "Shiva Teja",
    age : 23,
}

console.log(shivateja)

// Object Constructor
shivateja = new Object()
shivateja = Object()
console.log(shivateja)

// Object create method
let vehicle = {
    wheels: '4',
    fuelType: 'Gasoline',
    color: 'Green'
  }
let carProps = {
    type: {
      value: 'Volkswagen'
    },
    model: {
      value: 'Golf'
    }
}
  
var car = Object.create(vehicle, carProps)
console.log(car);

// Function Constructor 
function Person(name){
    this.name = name;
    this.age = 18;
}

var object = new Person("Shiva Teja");
console.log(object);

//Singleton Pattern
var object = new (function(){
    this.name = 'Shiva Teja';
})();

//ES6 class syntax
class Person{
    constructor(name){
        this.name = name;
    }
}

var object = new Person("Shiva Teja");
