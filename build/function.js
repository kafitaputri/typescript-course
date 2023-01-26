"use strict";
// tipe data pada balikan function
function getName() {
    return "hello, my name is Kafit";
}
console.log(getName());
function getAge() {
    return 123;
}
function printName() {
    console.log("print name");
}
printName();
// argument type
function multiply(val1, val2) {
    return val1 * val2;
}
const result = multiply(20, 5);
console.log(result);
const add = (val1, val2) => {
    return val1 + val2;
};
//default parameter
const fullName = (first, last = "Putri") => {
    return first + " " + last;
};
console.log(fullName("Kafita"));
//optional parameter
const getUmur = (val1, val2) => {
    return val1 + " " + val2;
};
console.log(getUmur("A", "B"));
