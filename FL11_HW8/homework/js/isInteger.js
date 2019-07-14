function isInteger(a) {
    return a % 1 === 0 && a !== null && a !== '';
}
isInteger(3.13);