"use strict";
class Asus {
    constructor(name, isGaming) {
        this.name = name;
        this.isGaming = isGaming;
    }
    on() {
        throw new Error("Method not implemented.");
    }
    off() {
        throw new Error("Method not implemented.");
    }
}
class MacBook {
    constructor(name, keyboardLight) {
        this.name = name;
        this.keyboardLight = keyboardLight;
    }
    on() {
        console.log("nyala");
    }
    off() {
        console.log("mati");
    }
}
let asus = new Asus('Asus', true);
console.log(asus.on());
console.log(asus.off());
let mb = new MacBook(' MPB', true);
console.log(mb.on());
console.log(mb.off());
