function Employee(firstName) {
    this.firstName = firstName;
    this.sayHello = function (name) {
        console.info(`Hello ${name}, my name is ${firstName}`);
    };
}

function Supervisor(firstName, lastName) {
    Employee.call(this, firstName);
    this.lastName = lastName;
}

const supervisor = new Supervisor("Imam", "Setiawan");
supervisor.sayHello("Jack");