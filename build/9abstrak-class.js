"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// ? ABSTRACK Class yaitu class yang tidak dapat diiniasi kan langsung, tetapi wajib di EXTENDS ke class chilrend nya
var Vihicle = /** @class */ (function () {
    function Vihicle() {
    }
    Vihicle.prototype.start = function () {
        console.log("MBRERRRR");
    };
    return Vihicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wheels = 4;
        return _this;
    }
    return Car;
}(Vihicle));
var car = new Car();
console.log(car);
console.log(car.wheels);
car.start();
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wheels = 2;
        return _this;
    }
    return Motorcycle;
}(Vihicle));
var motorcycle = new Motorcycle();
console.log(motorcycle);
motorcycle.start();
console.log(motorcycle.wheels);
