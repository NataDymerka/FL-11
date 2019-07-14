function isInteger(a) {
    return a % 1 === 0 && a !== null && a !== '';
}
function reverseNumber(n) {
    if (isInteger(n)) {
        let reverse = 0;
        let reminder;
        while (n !== 0) {
            reminder = n % 10;
            reverse = reverse * 10 + reminder; //shifting to decimal and adding reminder before it
            n = (n - reminder) / 10;
        }
        return reverse;
    } else {
        return 'Number is not integer'
    }
}
reverseNumber(3744);
