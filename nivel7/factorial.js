// http://www.codewars.com/kata/factorial

// david

function factorial(n) {
  if ((n < 0) | (n > 12))
    throw new RangeError('Parameter must be between 0 and 12');
  /*
  var f = 1;
  for (i = 1; i <= n; i++) f = f * i;
*/
  if (n === 0) return 1;
  return n * factorial(n - 1); // `factorial for ${n} is ${f}`;
}
