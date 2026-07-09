//Returns first matching item.
const users = [
  { id: 1, name: "Nisha" },
  { id: 2, name: "Rahul" }
];

const user = users.find(u => u.id === 2);

console.log(user);