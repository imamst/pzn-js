const names = ["Imam", "Jojo", "Setiawan"];

const [firstName, middleName, lastName] = names;
console.info(firstName);
console.info(lastName);

const cat = {
    name: "Kitty",
    color: "Grey",
    race: "Persian",
};

const {name, color, race : type = 'Angora' } = cat;
console.info(name);
console.info(color);
console.info(type);