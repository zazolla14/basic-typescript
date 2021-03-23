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
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
// ! sebuah fungsi yang memungkin sebuat PARAMETER atau METHOD agar dapat diakses tanpa harus menginiasikan clas terlebih dahulu
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.setName = function (value) {
        this.name = value;
    };
    User.prototype.getName = function () {
        return this.name;
    };
    return User;
}());
exports.User = User;
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(phone, name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.read = true;
        _this.write = true;
        _this._email = "";
        _this.phone = phone;
        return _this;
    }
    // ! [2] STATIC Method
    Admin.sayHai = function () {
        return "Say Hai";
    };
    Admin.prototype.getRoles = function () {
        return {
            read: this.read,
            write: this.write,
        };
    };
    Object.defineProperty(Admin.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    Admin.gender = "HAI"; // ! [1] STATIC Parameter
    return Admin;
}(User));
// ! [3] dipanggil tanpa harus menginisiasikan Class
// let azola = new Admin(24584, "Azola", 22) //! -> tidak perlu
console.log(Admin.gender);
console.log(Admin.sayHai());
