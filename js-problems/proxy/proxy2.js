const user = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
};

const handler = {
  get(target, property) {
    console.log(`Property ${property} has been read.`);
    return target[property];
  },
};
const proxyUser = new Proxy(user, handler);
