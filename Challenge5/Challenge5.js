var joseph = {
  name: "Joseph Joestar",
  bills: [182, 84, 42, 24],
  tipCalculate: function() {
    this.tips = [];
    this.finalValues = [];
    for (var c = 0; c < this.bills.length; c++) {
      var per;
      var bill = this.bills[c];
      if (bill < 50) {
        per = 0.2;
      } else if (bill >= 50 && bill < 200) {
        per = 0.15;
      } else {
        per = 0.1;
      }
      this.tips[c] = bill * per;
      this.finalValues[c] = bill * per + bill;
    }
  }
};
var mark = {
  name: "Markenson Kage",
  bills: [182, 84, 42, 24, 180],
  tipCalculate: function() {
    this.tips = [];
    this.finalValues = [];
    for (var c = 0; c < this.bills.length; c++) {
      var per;
      var bill = this.bills[c];
      if (bill < 100) {
        per = 0.2;
      } else if (bill >= 100 && bill < 200) {
        per = 0.1;
      } else {
        per = 0.25;
      }
      this.tips[c] = bill * per;
      this.finalValues[c] = bill * per + bill;
    }
  }
};

var calAcount = function(tips) {
  var sum = 0;
  for (var i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }
  return sum / tips.length;
};

joseph.tipCalculate();
mark.tipCalculate();
joseph.average = calAcount(joseph.tips);
mark.average = calAcount(mark.tips);
console.log(joseph, mark);

if (joseph.average > mark.average) {
  console.log(
    joseph.name +
      "'s family pays higher tips, with an average of $" +
      joseph.average
  );
} else if (mark.average > joseph.average) {
  console.log(
    mark.name +
      "'s family pays higher tips, with an average of $" +
      mark.average
  );
}
