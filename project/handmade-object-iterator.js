const myNumber = {}

myNumber[Symbol.iterator] = function () {
    let n = 0
    done = false

    return {
        next() {
            n += 3
            if (n == 33) { done = true }
            return { value: n, done: done }
        }
    }
}

// for ... of untuk iterable, mengambil value
// for ... in untuk object, mengambil index/property
for (const number of myNumber) {
    console.log(number)
}