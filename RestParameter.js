// Rest parameter is an improved way to handle function parameters which 
// allows us to represent an indefinite number of arguments as an array.
// The syntax would be as below,
function f(a,b,...args){

}

// for eg , let's take a sum example to calculate the dynamic number of parameters,
function sum(...args){
    let total = 0;
    for ( const i of args) {
        total += i;
    }
    return total;
}

console.log(sum(1,2,3,4));

// The rest parameter should be the last argument , as its job is to collect all the remaining
// arguments into an array.following piece of code throws an error
function someFunc(a,...b,c){
    return;
}


