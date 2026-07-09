//Optional Chaining helps us avoid errors when a property doesn't exist.
const student = {
    name: "Nisha",

    address: {
        city: "Vadodara"
    }
};

console.log(student.address?.city);



//Optional Chaining with Arrays
const users = [
    { name: "Rahul" }
];

console.log(users[0]?.name);