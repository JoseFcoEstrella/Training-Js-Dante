function client(name, bills) {
  var Joseph = {
    name: name,
    bills: bills,
    tipCalculate: function() {
      this.totalTips = [];
      this.total = [];
      for (var c = 0; c < this.bills.length; c++) {
        var per;
        var bill = this.bills[c];
        if (bill <= 49) {
          per = 0.2;
        } else if (bill > 49 && bill < 200) {
          per = 0.15;
        } else {
          per = 0.1;
        }
        this.totalTips[c] = bill * per;
        this.total[c] = bill * per + bill;
      }
    }
  };

  Joseph.tipCalculate();
  console.log(Joseph);
}

client("Joseph Joestar", [192, 30, 50, 20]);
