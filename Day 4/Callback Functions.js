//A callback function is a function passed as an argument to another function.
function greet(name) {
    console.log("Hello " + name);
}

function user(callback) {
    callback("Nisha");
}

user(greet);