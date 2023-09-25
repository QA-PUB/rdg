
console.log(Math.random());

function randomIntMax(max) {
    return Math.floor(Math.random() * max);
}

console.log(randomIntMax(9));

function randomIntMinMax(min, max) {
    return Math.floor(Math.random() * ( max - min ) + min);
}

console.log(randomIntMinMax(1, 9));

function randomChoice(array) {
    if (array.length > 0) {
        return array[randomIntMax(array.length)];
    } else {
        console.log("The provided array is empty");
        return null;
    }
}

let a = []; // Length 0
console.log(a.length);
let b = ["a", "b", "c"]; // Length 3
console.log(b.length);
console.log(randomIntMax(b.length));
console.log(randomChoice(b));
console.log(randomChoice(a));

function randomString(length, charset='abcdefghijklmnopqrstuvwxyz') {
    let result = "";
    for (let i = 0; i < length; i++) {
        result += charset[randomIntMax(charset.length)];
    }
    return result;
}

console.log(randomString(12));

function randomPhoneNumber(template="+x(xxx)xxxxxxx") {
    return template.split("").map(item => item.replace("x", randomIntMinMax(0, 10))).toString().replace(/,/g, "");
}

console.log(randomPhoneNumber());

function randomEmail(template="xxx@yyy.zzz") {
    return template.replace("xxx", randomString(10)).replace("yyy", randomString(10)).replace("zzz", randomString(3));
}

console.log(randomEmail());

function randomIP() {
    return `${randomIntMax(256)}.${randomIntMax(256)}.${randomIntMax(256)}.${randomIntMax(255)}`;
}

console.log(randomIP());

function randomEmoji() {
    const listOfEmoji = require("./emoji.json");
    return randomChoice(listOfEmoji);
}

console.log(randomEmoji())

function randomCurrency() {
    const listOfCurrencies = require("./currencies.json");
    return randomChoice(listOfCurrencies);
}

console.log(randomCurrency())

