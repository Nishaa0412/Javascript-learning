//Useful when looping through objects

const person = {
    name: "Rahul",
    age: 20,
    city: "Vadodara"
};

for (const [key, value] of Object.entries(person)) {
    console.log(key, value);
}