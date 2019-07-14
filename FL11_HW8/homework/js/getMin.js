
function getMin() {
    let min = arguments[0];
    let i;
    for (i = 1; i < arguments.length; i++) {
        min = (min < arguments[i]) ? min : arguments[i]; //checking arguments and saving minimum
    }
    return min;
}

getMin(3, 0, -3, -9); 