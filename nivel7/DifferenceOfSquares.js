// http://www.codewars.com/kata/difference-of-squares

// david
function differenceOfSquares(x) {
  square = 0;
  for (var i = 1; i <= x; i++) square += i;
  square = Math.pow(square, 2);

  sum = 0;
  for (var i = 1; i <= x; i++) sum += Math.pow(i, 2);

  return square - sum;
}

/* REFACTORIZADO...

function differenceOfSquares(x) {
  var square = 0, sum = 0;
  for (var i = 1; i <= x; i++) {
    square += i;
    sum += Math.pow(i, 2);
  }
  square = Math.pow(square, 2);

  return square - sum;
}

*/
