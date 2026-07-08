let age = 20;
const name = "John";

function greet(user = "Guest") {
    return `Hello ${user}`;
}

const numbers = [1, 2, 3];
const copied = [...numbers];

const [first] = numbers;

console.log(greet(name));
console.log(first);