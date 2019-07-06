let a = parseInt(prompt('Please, input first triangle side length', 1), 10);
let b = parseInt(prompt('Please, input second triangle side length', 1), 10);
let c = parseInt(prompt('Please, input third triangle side length', 1), 10);
if (a < b + c && b < a + c && c < a + b && a > 0 && b > 0 && c > 0) { //checking if the triangle exists
    if (a === b && b === c) { // checking if all sides are equal
        console.log('Equivalent triangle');
    } else if (a === b || b === c || a === c) { //checking if two sides are equal
        console.log('Isosceles triangle');
    } else {
        console.log('Normal triangle');
    }
} else {
    console.log('Triangle doesn’t exist');
}