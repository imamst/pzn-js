// optional chaining digunakan untuk mencegah terjadi error akibat akses nilai null/undefined
// dengan cara melakukan pengecekan dulu apakah suatu variable atau property berisi null/undefined
// sebelum melakukan akses kepadanya

const person = {};

// dengan if
if (person.address !== undefined && person.address !== null) {
    console.info(person.addresss.country);
}

// dengan optional chaining
let country = person?.address?.country;
console.info(country);