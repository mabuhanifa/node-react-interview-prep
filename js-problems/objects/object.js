const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const person2 = {
  firstName: "Mary",
  lastName: "Doe",
};

//call()
// console.log(person.fullName.call(person2));
