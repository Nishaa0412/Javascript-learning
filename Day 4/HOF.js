/*A Higher-Order Function is a function that:

Takes another function as an argument
OR
Returns a function */

function greet() {
    return "Hello";
}

function execute(fn) {
    console.log(fn());
}

execute(greet);