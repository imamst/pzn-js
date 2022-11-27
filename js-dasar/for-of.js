// FOR ... OF digunakan untuke melakukan perulangan terhadap nilai dari iterable object
// seperti string, array dll?
// Note: tidak bisa digunakan pada nilai property object karena object bukan iterable

const names = ["Imam", "Setiawan", "Ganteng"];

for (const name of names) {
    console.info(name);
}
// Imam
// Setiawan
// Ganteng