"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Asus_1 = __importDefault(require("./Asus"));
const MacBook_1 = __importDefault(require("./MacBook"));
let asus = new Asus_1.default("zenbook", true, true);
console.log(asus);
let macBook = new MacBook_1.default(2017, false, false);
console.log("macbook");
macBook.a();
macBook.b();
