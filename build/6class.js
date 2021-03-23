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
exports.User = exports.Person = exports.Book = exports.TestUser = void 0;
// TODO clas dengan mendefinikan PROPERTY (public .....)
var TestUser = /** @class */ (function () {
    function TestUser(name, age) {
        this.name = name;
        this.age = age;
    }
    return TestUser;
}());
exports.TestUser = TestUser;
var azola = new TestUser("Azola", 22);
console.log(azola);
console.log("Hallo my name " + azola.name + " and iam " + azola.age + " olds");
// TODO class tanpa mendefinikan PROPERTY
var Book = /** @class */ (function () {
    function Book(name, code) {
        this.name = name;
        this.code = code;
    }
    return Book;
}());
exports.Book = Book;
var SH01 = new Book("Harry Potter", 2210);
console.log(SH01);
console.log("Name : " + SH01.name + ", code : " + SH01.code);
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.printName = function () {
        return this.name;
    };
    Person.prototype.printAge = function () {
        console.log("Iam " + this.age + " olds");
    };
    return Person;
}());
exports.Person = Person;
var dety = new Person("Dety", 21);
console.log(dety);
console.log("Hallo my name " + dety.printName());
dety.printAge();
console.log("\n\n");
// TODO Inheritance
// ? Extendents mewariskan semua method yang ada diclass Parent nya
// ? Public = bisa diakses disemua class atau dari luar class tersebut
// ? protected = hanya bisa diakses oleh class itu sendiri dan class children nya
// ? private = hanya dapat diakses oleh clas itu saja
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
var zolla = new User("Zolla", 21);
console.log(zolla);
zolla.setName("Dety");
console.log(zolla.getName());
console.log("\n");
// TODO Inheritance tanpa menggunakan Contractor
// class Admin extends User {
//     write: boolean = true
//     read: boolean = true
//     getRoles(): { write: boolean; read: boolean } {
//         return {
//             write: this.write,
//             read: this.read,
//         }
//     }
// }
// let admin = new Admin("Azola", 22)
// TODO Inheritance menggunakan Super() contraktor
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(phone, name, age) {
        var _this = 
        // ! [3] kemudian class Admin() membuat contraktor sendiri dengan membawa properti parent-nya
        _super.call(this, name, age) // ! [2] digunakan untuk memanggil property pada class Parent-nya (User())
         || this;
        _this.write = true;
        _this.read = true;
        _this.phone = phone;
        return _this;
    }
    Admin.prototype.getRoles = function () {
        return {
            write: this.write,
            read: this.read,
        };
    };
    return Admin;
}(User));
var admin = new Admin(62131412, "Azola", 22);
console.log(admin);
console.log(admin.name);
console.log(admin.age);
console.log(admin.phone); // ! [4 ]sehingga objeck admin dapat memanggil parameter baru
console.log(admin.write);
console.log(admin.read);
admin.setName("Dety");
console.log(admin.getName());
console.log(admin.getRoles());
console.log(admin.getRoles().write);
console.log(admin.getRoles().read);
