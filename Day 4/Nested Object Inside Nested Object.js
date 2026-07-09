//Nested Object Inside Nested Object
const user = {
    name: "Rahul",

    address: {
        city: "Vadodara",

        location: {
            latitude: 22.3072,
            longitude: 73.1812
        }
    }
};
console.log(user.name);
console.log(user.address.city);
console.log(user.address.location.latitude);
console.log(user.address.location.longitude);