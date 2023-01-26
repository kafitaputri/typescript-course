function getData(value: any) {
    return value;
}

console.log(getData("Kafita").length);
console.log(getData(123).length);

//Generic
function myData<T>(value: T){
    return value
}

console.log(myData("Kafita").length);
console.log(myData(123));

const arrowfunc = <T, >(value: T) => {

}