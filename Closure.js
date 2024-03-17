function welcome(name){
    var greetingInfo = function(message){
        console.log(message + " " + name);
    }
    return greetingInfo;
}

var func = welcome("Shiva Teja");
func("Hello");
