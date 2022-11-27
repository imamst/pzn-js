// label digunakan untuk menandai suatu loop sehingga bisa direferensikan oleh break atau continue

loopi:
    for (let i = 0; i < 10; i++) {
        loopj:
            for (let j = 0; j < 5; j++) {
                if (j > 2) {
                    continue loopi;
                }
                console.info("j: " + j);
            }
    }