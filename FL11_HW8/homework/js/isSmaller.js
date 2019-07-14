function isBigger(a, b) {
    return a > b;
}
function isSmaller (y, x) {
    return isBigger(x, y); //chenging arguments to opposite to use isBigger function
}
isSmaller(3,6);