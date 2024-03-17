//The destructuring assignment is a JavaScript expression that makes it possible to 
//unpack values from arrays or properties from objects into distinct variables. 
var [one,two,three] = ["JAN","FEB","MARCH"]
console.log(one); // JAN
console.log(two); // FEB
console.log(three); // MARCH

var x, y, z;

[x = 2, y = 4, z = 6] = [10];
console.log(x); // 10
console.log(y); // 4
console.log(z); // 6

var {name,age} = { name : 'John', age : 32}
console.log(name);
console.log(age);

var { x = 2, y = 4, z = 6 } = { x: 10 };

console.log(x); // 10
console.log(y); // 4
console.log(z); // 6



