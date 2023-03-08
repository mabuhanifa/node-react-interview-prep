log = console.log;
const users = [
  { id: 1, name: "John", isActive: true, age: 21 },
  { id: 2, name: "Karim", isActive: false, age: 25 },
  { id: 3, name: "Rahim", isActive: true, age: 18 },
];

let newUser = [];

/* for loop*/
// for(let i=0;i<users.length;i++){
//   newUser.push(users[i].name)
// }

/* for each*/

// users.forEach((user) => {
//   newUser.push(user.name);
// });

/* map*/
const newUser2 = users.map((user) => user.name);
const aged = users.sort((a, b) => b.age - a.age);
log(newUser2);
