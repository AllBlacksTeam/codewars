// http://www.codewars.com/kata/sum-arrays

// julio

function sum(myArray) {
  var total = 0;
  for (var i = 0; i < myArray.length; i++) {
    total = total + myArray[i];
  }
  return total;
}

// david

function sum(numbers) {
  'use strict';

  var total = 0;
  for (var i in numbers) {
    total += numbers[i];
  }

  return total;
}
