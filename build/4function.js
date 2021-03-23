"use strict";
// TODO typedata pada func
function getName() {
    return "My name Azola";
}
function getAges() {
    return 22;
}
console.log(getName());
// * func Void digunakan untuk membuat func tanpa RETURN
function prints() {
    console.log(getAges());
}
prints();
// TODO typedata pada PARAMETER
function multyple(val1, val2) {
    return val1 * val2;
}
console.log(multyple(20, 5));
// TODO default PARAMETER
function fullName(fisrtName, lastname) {
    if (lastname === void 0) { lastname = "Zubizarreta"; }
    return "Hallo " + fisrtName + " " + lastname;
}
console.log(fullName("Azola"));
console.log(fullName("Dety", "Mei"));
// TODO optional Parameter -> bisa diisi atau tidak. Jika tidak diisi maka value nya akan undifine
function getProducts(name, code) {
    return "Name products " + name + ", code: " + code;
}
console.log(getProducts("shampo", "SH01"));
console.log(getProducts("shampo"));
var tambah = function (val1, val2) {
    return val1 + val2;
};
console.log(tambah(1, 1));
var azola = function (name, ages) {
    return name + " umur " + ages;
};
console.log(azola("Azola", 22));
var dety = function (name, age) {
    console.log("Hai my " + name + " and " + age + " olds");
};
dety("Dety", 21);
