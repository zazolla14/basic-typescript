"use strict";
var List = /** @class */ (function () {
    function List() {
        var datas = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            datas[_i] = arguments[_i];
        }
        this.data = datas;
    }
    List.prototype.setDatas = function () {
        var _a;
        var value = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            value[_i] = arguments[_i];
        }
        (_a = this.data).push.apply(_a, value);
    };
    List.prototype.setData = function (value) {
        this.data.push(value);
    };
    List.prototype.getDatas = function () {
        return this.data;
    };
    return List;
}());
// ! jika hanya ingin mengini class dengan typedata Number
var data = new List(1, 2, 3);
console.log(data);
data.setDatas(4, 5, 6);
data.setData(7);
console.log(data.getDatas());
// ! jika ingin mengini data dengan random
var random = new List(1, "Azola", true, "Dety", 3);
console.log(random);
random.setDatas(true, 3, "Zubi");
console.log(random.getDatas());
random.setData("Mei");
console.log(random.getDatas());
