/*
* http://www.codewars.com/kata/is-it-even
*/

// david

function testEven(n) {
  return n == parseFloat(n) ? !(n % 2) : false;
}

// julio

function isEven(num) {
  if(num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
