// IN operator digunakan untuk mengecek keberadaan property atau index
// dalam suatu object atau array

const person = {
    firstName: undefined,
    lastName: "Setiawan"
};

let arr = [null, "1", "Hello"];

console.info("firstName" in person);
console.info(1 in arr);