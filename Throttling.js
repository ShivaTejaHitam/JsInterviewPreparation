//Both browser and NodeJS javascript environments throttles 
//with a minimum delay that is greater than 0ms. 
//That means even though setting a delay of 0ms will not happen instantaneously.
function runMeFirst() {
    console.log("My script is initialized");
  }
setTimeout(runMeFirst, 0);
console.log("Script loaded");