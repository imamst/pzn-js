function Person() {
    this.firstName = "";
    this.lastName = "";
    this.sayHello = function (name) {
        console.info(`Hello ${name}, my name is ${this.firstName} ${this.lastName}`)
    };
}

const imam = new Person();
imam.firstName = "imam";
imam.lastName = "setiawan";
imam.sayHello("Eko");

// const eko = new Person();
// console.log(eko);