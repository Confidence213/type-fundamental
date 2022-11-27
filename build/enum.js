"use strict";
//! ENUM
// Numeric Enums.
// Auto increment number if it is not assigned.
var Months;
(function (Months) {
    Months[Months["JAN"] = 0] = "JAN";
    Months[Months["FEB"] = 1] = "FEB";
    Months[Months["MARCH"] = 2] = "MARCH";
    Months[Months["APRIL"] = 3] = "APRIL";
    Months[Months["MAY"] = 4] = "MAY";
    Months[Months["JUNE"] = 5] = "JUNE";
})(Months || (Months = {}));
//! String Enums.
var newMonths;
(function (newMonths) {
    newMonths["JAN"] = "January";
    newMonths["FEB"] = "February";
    newMonths["MAR"] = "MARCH";
    newMonths["APR"] = "APRIL";
    newMonths["MAY"] = "MAY";
})(newMonths || (newMonths = {}));
