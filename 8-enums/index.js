/**
 -- Data types
 ---Enums => Enumeration
 ----Allow us to declare a set of named constant
 ----Used for logical grouping collection of constants "collection of related values".
 ---- it organize your code
 ---- By default  enums are number-based, first element is 0
 ---- There a numeric enums
 ---- There a string-based enums
 ---- there a heterogeneous enum [string - number];
 */
var getHard = function () { return 3; };
var Kids;
(function (Kids) {
    Kids[Kids["five"] = 25] = "five";
    Kids[Kids["seven"] = 20] = "seven";
    Kids[Kids["ten"] = 15] = "ten";
})(Kids || (Kids = {}));
var Level;
(function (Level) {
    Level[Level["Kid"] = 25] = "Kid";
    Level[Level["Easy"] = 9] = "Easy";
    Level[Level["Medium"] = 6] = "Medium";
    Level[Level["Hard"] = getHard()] = "Hard";
})(Level || (Level = {}));
var lv1 = 'Easy';
if (lv1 === 'Easy') {
    console.log("The level is ".concat(lv1, " and number of second is ").concat(Level.Easy));
}
var lv2 = 'Hard';
if (lv2 === 'Hard') {
    console.log("The level is ".concat(lv2, " and number of second is ").concat(3 /* Level2.Hard */));
}
