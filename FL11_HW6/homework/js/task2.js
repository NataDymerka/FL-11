let a = parseInt(window.prompt('Please, input first triangle side length', 1), 10);
let b = parseInt(window.prompt('Please, input second triangle side length', 1), 10);
let c = parseInt(window.prompt('Please, input third triangle side length', 1), 10);
if (a < b + c && b < a + c && c < a + b && a > 0 && b > 0 && c > 0) {
    if (a === b && b === c) {
        console.log('Equivalent triangle');
    } else if (a === b || b === c || a === c) {
        console.log('Isosceles triangle');
    } else {
        console.log('Normal triangle');
    }
} else {
    console.log('Triangle doesn’t exist');
}