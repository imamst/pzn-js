function *getGanjil(value) {
    for (let i = 0; i < value; i++) {
        if (i % 2 != 0) {
            console.info(`yield ${i}`);
            yield i;
        }
    }
}

const ganjil = getGanjil(108);
for (num of ganjil) {
    console.info(num);
}