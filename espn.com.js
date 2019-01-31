var CONST_FEET = 30.48;
var CONST_INCH = 2.54;
var CONST_WEIGHT = 0.45359237;

var cell = $(".player-bio .general-info li:eq(1)");

var data = cell.text().split(", ");

var height = data[0].trim().split(" ");
var feet = parseInt(height[0], 10);
var inch = parseInt(height[1], 10);
var cm = parseInt(feet * CONST_FEET + inch * CONST_INCH, 10);

var weight = parseInt(data[1].trim(), 10);
var kg = parseInt(weight * CONST_WEIGHT, 10);

cell.attr("title", cell.text());
cell.text(cm + " cm, " + kg + " kg");
