/* Optional Chaining + Nullish Coalescing
This combination is used a lot in React and APIs.
*/

const response = {
    user: {
        name: "Nisha"
    }
};

const city = response.user?.address?.city ?? "Unknown City";

console.log(city);