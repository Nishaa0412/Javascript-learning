// Copies or merges objects

const obj1 = {
    name: "Rahul"
};

const obj2 = {
    age: 20
};

const result = Object.assign({}, obj1, obj2);

console.log(result);