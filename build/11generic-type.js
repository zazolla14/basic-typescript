"use strict";
// ? GENERIC TYPE -> agar TYPEDATA yang digunakan DINAMIS sesuai dengan kbebutuhan
function getData(value) {
    return value;
}
console.log(getData("Azola").length); // ! memiliki nilai sesuai dengan jumlah karakter, KARENA typedata string memiliki properti LENGTH
console.log(getData(123).length); // ! tidak terdeteksi ERROR (undfined) tidak memiliki nilai karena TYPEDATA NUMBER tidak memiliki property LENGTH
//? SOLUSI agar tidak terjadi error adalah dengan menggunakan generic data
function getApa(value) {
    return value;
}
console.log(getApa("Azola").length);
// console.log(getApa(123).length) // ! terdeteksi error
var getBook = function (value) {
    return value;
};
