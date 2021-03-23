"use strict";
// TODO Enum
var Month;
(function (Month) {
    Month[Month["Jan"] = 1] = "Jan";
    Month[Month["Feb"] = 2] = "Feb";
    Month[Month["Mar"] = 3] = "Mar";
    Month[Month["Apr"] = 100] = "Apr";
    Month[Month["Mei"] = 101] = "Mei";
    Month[Month["Jun"] = 102] = "Jun";
    Month[Month["Jul"] = 103] = "Jul";
})(Month || (Month = {}));
console.log(Month);
console.log(Month.Jan);
console.log(Month.Mei);
var days;
(function (days) {
    days["Sun"] = "Sunday";
    days["Mon"] = "Monday";
    days["Tu"] = "Tuesday";
    days["We"] = "Wednestday";
    days["Th"] = "Thursday";
    days["Fr"] = "Frieday";
    days["Sa"] = "Saturday";
})(days || (days = {}));
console.log(days);
console.log(days.Sun);
console.log(days.Fr);
