// Makes an object read-only.
const person = {
    name: "Rahul"
};

Object.freeze(person);

person.name = "Amit";

console.log(person.name);