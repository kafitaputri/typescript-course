"use strict";
//enum
//numeric enums
// enum Month {
//     JAN = 1,
//     FEB,
//     MAR,
//     APR,
//     MAY
// }
// console.log(Month.MAR);
// string enums
var Month;
(function (Month) {
    Month["JAN"] = "januari";
    Month["FEB"] = "februari";
    Month["MAR"] = "maret";
    Month["APR"] = "april";
    Month["MAY"] = "mei";
})(Month || (Month = {}));
console.log(Month.FEB);
