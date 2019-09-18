var per = 0; // VARIABLE OF PERCENT
function tipCalculate(bill) {
  if (bill <= 49) {
    per = 0.2;
  } else if (bill >= 50 && bill < 200) {
    per = 0.15;
  } else {
    per = 0.1;
  }
  console.log("TOTAL: " + per * bill);
}

tipCalculate(48);
