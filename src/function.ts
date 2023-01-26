// tipe data pada balikan function

function getName(): String {
    return "hello, my name is Kafit";
}

console.log(getName());

function getAge(): number {
    return 123;
}

function printName() {
    console.log("print name"); 
}

printName();

// argument type

function multiply(val1: number, val2: number): number {
return val1 * val2;
}

const result = multiply(20, 5);
console.log(result);  

// function as type

type tambah = (val1: number, val2: number) => number;
const add: tambah =  (val1: number, val2: number):  number=> {
    return val1 + val2;
}

//default parameter
const fullName = (first: string, last: string = "Putri"): string => {
     return first + " " + last; 
}

console.log(fullName("Kafita"));

//optional parameter
const getUmur = (val1: string, val2: string): string => {
    return val1 + " " + val2;
}

console.log(getUmur("A", "B"));

