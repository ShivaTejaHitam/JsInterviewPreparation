/*
Shallow Copy: Shallow copy is a bitwise copy of an object.
 A new object is created that has an exact copy of the values in the original object. 
 If any of the fields of the object are references to other objects, 
 just the reference addresses are copied i.e., only the memory address is copied.
*/
var empDetails = {
    name: "John",
    age: 25,
    expertise: "Software Developer",
  };

var empDetailsShallowCopy = empDetails; //Shallow copying!

// The above statement will also change the name of empDetails,since we have shallow copy.
//That means we're losing the original data as well.
empDetailsShallowCopy.name = "JohnSon";

/*
Deep Copy: A deep copy copies all fields, 
and makes copies of dynamically allocated memory pointed to by the fields. 
A deep copy occurs when an object is copied along with the objects to which it refers.
*/
var empDetails = {
    name: "John",
    age: 25,
    expertise: "Software Developer",
  };

// create a deep copy by using the properties from original object in to new variable
var empDetailsDeepCopy = {
    name: empDetails.name,
    age: empDetails.age,
    expertise: empDetails.expertise,
};