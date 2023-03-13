const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function (age=25, city="Dhaka") {
    return (
      this.firstName +
      " " +
      this.lastName +
      " from " +
      city +
      " and " +
      age +
      " years old "
    );
  },
};

const person2 = {
  firstName: "Mary",
  lastName: "Doe",
};

//call()

// console.log(person.fullName.call(person2));

//apply()
// console.log(person.fullName.apply(person2,[35,"Sylhet"]));

 let fullName = person.fullName.bind(person2,[35,"Sylhet"]);
 console.log(fullName);
