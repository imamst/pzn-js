function Person(firstName) {
    this.firstName = firstName;
    this.sayHello = function (name) {
        console.info(`Hello ${name}, my name is ${firstName}`);
    };
}

const imam = new Person("Imam");
imam.sayBye = function() {
    console.info("Good bye");
};
console.log(imam);

const setiawan = new Person("Setiawan");
console.log(setiawan);

Person.prototype.run = function () {
    console.info(`${this.firstName} is running!`);
};
console.log(imam);
console.log(setiawan);