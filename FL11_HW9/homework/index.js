function getNumbers(a) {
    const stack = [];
    for (let i = 0; i < a.length; i++) {
        let num = parseInt(a[i]);
        if (!isNaN(num)) {
            stack.push(num);
        }
    }
    return stack;
}
// getNumbers('n1um3ber95'); // returns [1,3,9,5] 

function findTypes() {
    const obj = {};
    for (let i = 0; i < arguments.length; i++) {
        let temp_type = typeof arguments[i];
        if (obj.hasOwnProperty(temp_type)) {
            obj[temp_type]++;
        } else {
            obj[temp_type] = 1;
        }
    }
    return obj;
}
// findTypes('1', 2, undefined, 65, 'wrofh', '', null); //{string: 3, number: 2, undefined: 1, object: 1}

function executeforEach(arr, func) {
    const arrNew = [];
    for (let i = 0; i < arr.length; i++) {
        arrNew[i] = func(arr[i]);
    }
    return arrNew;
}
// executeforEach([1, 2, 3], function (el) { console.log(el) })

function mapArray(arr, func) {
    arr = executeforEach(arr, func);
    return arr;
}
// mapArray([2, 5, 8], function (el) { return el + 3 });

function filterArray(arr, func) {
    const arrBool = executeforEach(arr, func);
    const arrResult = [];
    for (let i = 0; i < arr.length; i++) {
        if (arrBool[i]) {
            arrResult.push(arr[i]);
        }
    }
    return arrResult;
}
// filterArray([2, 5, 8], function (el) { return el > 3 }) // returns [5, 8]

function showFormattedDate(d) {
    let monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let date = d.getDate();
    let month = monthNames[d.getMonth()];
    let year = d.getFullYear();
    let dateString = 'Date: ' + month + ' ' + date + ' ' + year;
    return dateString;
}
// showFormattedDate(new Date('2019-01-27T01:10:00'));

function canConvertToDate(str) {
    let d = new Date(str);
    let month = d.getMonth(); // month value of Date object  
    let ValidDate = !isNaN(month); // if date is invalid
    let arr = str.split('-'); //array with '-' divided strings
    let actualMonth = parseInt(arr[1]); // convert to number the month value from input string
    return ValidDate && actualMonth === month + 1; // monthes are equal if no overlow in data object
}
// canConvertToDate('2016-13-18T00:00:00')

function daysBetween(d1, d2) {
    let d1MS = d1.getTime(); //in msec
    let d2MS = d2.getTime(); //in msec
    const sec = 1000;
    const min = 60;
    const hour = 60;
    const day = 24;
    let diff = d2MS > d1MS ? d2MS - d1MS : d1MS - d2MS;
    return Math.round(diff / (sec * min * hour * day));
}
// daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00'))  // 32

function getAmountOfAdultPeople(data) {
    let people = 0;
    const adult = 18;
    const year = 365;
    const arrAge = [];
    let daysDiff;
    for (let i = 0; i < data.length; i++) {
        daysDiff = daysBetween(new Date(data[i][' birthday ']), new Date()); // days between user birthday date and current date
        arrAge.push(daysDiff / year); // create new array with converted years from days
    }
    let over18 = filterArray(arrAge, function (el) { // checking if age > 18
        return el > adult
    });
    for (let i = 0; i < over18.length; i++) { // count people who are adult
        people++;
    }
    return people;
}
const data =
    [
        {
            '_id': '5b5e3168c6bf40f2c1235cd6',
            'index': 0,
            ' birthday ': '2016-03-18T00:00:00',
            'eyeColor': 'green',
            'name': 'Stein',
            'favoriteFruit': 'apple'
        },
        {
            '_id': '5b5e3168e328c0d72e4f27d8',
            'index': 1,
            ' birthday ': '1991-02-11T00:00:00',
            'eyeColor': 'blue',
            'name': 'Cortez',
            'favoriteFruit': 'strawberry'
        },
        {
            '_id': '5b5e3168cc79132b631c666a',
            'index': 2,
            ' birthday ': '1984-04-17T00:00:00',
            'eyeColor': 'blue',
            'name': 'Suzette',
            'favoriteFruit': 'apple'
        },
        {
            '_id': '5b5e31682093adcc6cd0dde5',
            'index': 3,
            ' birthday ': '1994-04-17T00:00:00',
            'eyeColor': 'green',
            'name': 'George',
            'favoriteFruit': 'banana'
        }
    ];
// getAmountOfAdultPeople(data) // returns 3;

function keys(obj) {
    const result = [];
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            result.push(prop);
        }
    }
    return result;
}
// keys({ keyOne: 1, keyTwo: 2, keyThree: 3 }) // returns [“keyOne”, “keyTwo”, “keyThree”]

function values(obj) {
    const result = [];
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            result.push(obj[prop]);
        }
    }
    return result;
}
// values({ keyOne: 1, keyTwo: 2, keyThree: 3 }) // returns [1, 2, 3]