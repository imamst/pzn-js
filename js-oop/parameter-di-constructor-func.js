function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHello = function (name) {
        console.info(`Hello ${name}, my name is ${this.firstName} ${this.lastName}`)
    };
}

const imam = new Person();
imam.firstName = "imam";
imam.lastName = "setiawan";
imam.sayHello("Eko");
