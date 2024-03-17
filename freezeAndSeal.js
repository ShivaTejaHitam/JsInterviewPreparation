const obj = {
    prop : 100,
};

Object.freeze(obj);
obj.prop = 200; //throws error in strict mode

console.log(obj.prop);

// freezing is applied to top level properties in objects but 
// not for nested objects.
const user = {
    name : "John",
    employment : {
        department : "IT"
    },
};

Object.freeze(user);
user.employment.department = "Finance";
console.log(user);

// Note: It causes type error if the argument passed is not an object

// seal is similar to freeze but it does not allow adding new properties to object
// but modifying existing properties is allowed
