"use strict";
// ? INTERFACE merupakan Groupin dari Property dan Method yang dapat di-IMPLEMETASI-kan pada clas
var Lenovo = /** @class */ (function () {
    function Lenovo(name, isGaming) {
        this.name = name;
        this.isGaming = isGaming;
    }
    Lenovo.prototype.turnOn = function () {
        console.log("Turn On");
    };
    Lenovo.prototype.turnOff = function () {
        console.log("Shutdown");
    };
    return Lenovo;
}());
var lenovo = new Lenovo("Legion", true);
console.log(lenovo);
console.log("Name product " + lenovo.name + ", Gaming: " + lenovo.isGaming);
lenovo.turnOn();
lenovo.turnOff();
var CBR250RR = /** @class */ (function () {
    function CBR250RR(name, cc, automatic) {
        this.name = name;
        this.cc = cc;
        this.automatic = automatic;
    }
    CBR250RR.prototype.start = function () {
        console.log("Engine Start...");
    };
    CBR250RR.prototype.stop = function () {
        console.log("Engine stop...");
    };
    return CBR250RR;
}());
var cbr250rr = new CBR250RR("CBR250RR", 250, false);
console.log(cbr250rr);
console.log(cbr250rr.name + ", " + cbr250rr.cc + "cc," + cbr250rr.automatic);
cbr250rr.start();
cbr250rr.stop();
