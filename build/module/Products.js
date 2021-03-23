"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Lanevo_1 = __importDefault(require("./Lanevo"));
var Macbook_1 = __importDefault(require("./Macbook"));
var lenovo = new Lanevo_1.default("Legion", true, false);
console.log(lenovo);
lenovo.turnOn();
lenovo.turnOff();
console.log("\n");
var macbook = new Macbook_1.default(2020, false, true);
console.log(macbook);
macbook.turnOn();
macbook.turnOff();
