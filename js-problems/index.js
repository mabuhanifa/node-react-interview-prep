log = console.log;
const users = [
  { id: 1, name: "John", isActive: true },
  { id: 2, name: "Karim", isActive: false },
  { id: 3, name: "Rahim", isActive: true },
];
let newUser = [];

/* for loop*/
// for(let i=0;i<users.length;i++){
//   newUser.push(users[i].name)
// }


/* for loop*/

users.forEach(user=>{
    newUser.push(user.name)
  })


log(newUser);