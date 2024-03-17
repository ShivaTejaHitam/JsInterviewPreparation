// You can use hasOwnProperty to particularly test for properties of the object instance (and not inherited properties)
var object = {
    name : 'Shiva',
    age : 23,
    location : 'Hyderabad'
}

console.log(object.hasOwnProperty('name'));