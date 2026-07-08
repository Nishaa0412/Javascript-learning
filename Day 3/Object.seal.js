//Allows updating existing properties but prevents adding/removing properties.
const person = {
    name: "Rahul"
};

Object.seal(person);

person.name = "Amit";

console.log(person.name);