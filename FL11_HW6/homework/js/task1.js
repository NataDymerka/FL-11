let a1 =parseInt(window.prompt('Please, enter a1', 1),10);
let a2 =parseInt(window.prompt('Please, enter a2', 1),10);
let b1 =parseInt(window.prompt('Please, enter b1', 1),10);
let b2 =parseInt(window.prompt('Please, enter b2', 1),10);
let c1 =parseInt(window.prompt('Please, enter c1', 1),10);
let c2 =parseInt(window.prompt('Please, enter c2', 1),10);
const div = 2;
let C1 = (a1 + b1) / div;
let C2 = (a2 + b2) / div;
let line = a1 !== b1 || a2 !== b2;
if (c1 === C1 && c2 === C2 && line) {
    console.log('true');
} else {
    console.log('false');
}