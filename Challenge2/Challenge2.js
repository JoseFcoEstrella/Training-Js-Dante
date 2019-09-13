var scoreJoseph = (90 + 112 + 123) / 3;
var scoreDio = (97 + 122 + 83) / 3;
var John = function(a, b, c) {
  var scoreJohn = (a + b + c) / 3;

  if (scoreJohn > (scoreJoseph && scoreDio)) {
    console.log("John is the winner");
  } else if (scoreJoseph > (scoreJohn && scoreDio)) {
    console.log(`Joseph is the winner`);
  } else if (scoreDio > (scoreJohn && scoreJoseph)) {
    console.log("Dio is the winner");
  } else {
    console.log("DRAW");
  }
};

John(40, 80, 100);
