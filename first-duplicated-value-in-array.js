const firstRepeatedValue = (array) => {
    let set = new Set();
    for (let value of array) {
        if (set.has(value)) {
            return value
        } else {
            set.add(value);
        }
    }
}
let arr = [-4, 2, 5, 10, 500, 2, 4]

firstRepeatedValue(arr);
