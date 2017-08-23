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
  return n * factorial(n - 1);
}


// julio

function factorial(num) {
  if ((num < 0) || (num > 12)) {
    throw new RangeError('Parameter must be between 0 and 12');
  }
  if(num ===0) {
    return 1;
  }
  var output = num;
  for(var i=num-1; i>0; i--) {
    output = output * i;
  }
  return output;
}
