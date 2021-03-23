"use strict";
//? SETTER digunakan untuk menset suatu properti , untk validasi suatu input disuatu class
//? GETTER digunakan unutk mengambil nilai dari property di suatu class
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
// TODO Setter dan Getter
var User = /** @class */ (function () {
    function User(name, age) {
        var _this = this;
        this.age = age;
        this.getName = function () {
            return _this.name;
        };
        this.name = name;
    }
    User.prototype.setName = function (value) {
        this.name = value;
    };
    return User;
}());
exports.User = User;
// TODO Inheritance menggunakan Super() contraktor
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.write = true;
        _this.read = true;
        _this._email = ""; // ! [1] buat property dengan type private
        return _this;
    }
    Admin.prototype.getRoles = function () {
        return {
            write: this.write,
            read: this.read,
        };
    };
    Object.defineProperty(Admin.prototype, "email", {
        // ! [3] GET suatu method
        get: function () {
            return this._email;
        },
        // ! [2] SET suatu method
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    return Admin;
}(User));
var admin = new Admin("Azola", 22);
console.log(admin);
// ! tidak dapat diakses karena property _email Private
// admin._email
admin.email = "azola@gmail.com"; //! [4] SET input email disini
console.log(admin);
