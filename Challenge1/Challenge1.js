var massMark = 78; // values in kg
var heightMark = 1.69; // values in meters

// John's status
var john = function(mass, height) {
  var bmiMark = massMark / (heightMark * heightMark); // bmi mark
  var bmiJohn = mass / (height * height); // bmi john
  console.log("Is mark BMI heigher than John?: " + (bmiMark > bmiJohn)); // a console.log with messange and comparison
};

john(92, 1.95);
