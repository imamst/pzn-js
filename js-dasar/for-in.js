// FOR .. IN digunakan untuk melakukan perulangan terhadap index array atau
// properti object

const person = {
    firstName: undefined,
    middleName: undefined,
    lastName: undefined
};

for (const properti in person) {
    console.info(properti);
}
// firstName
// middleName
// lastName