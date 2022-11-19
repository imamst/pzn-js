const person = {
    firstName: "Imam",
    lastName: "Setiawan",
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value) {
        const nameArr = value.split(" ");
        this.firstName = nameArr[0];
        this.lastName = nameArr[1];
    }
}

person.fullName = "Lua Pux"
console.info(person.fullName);