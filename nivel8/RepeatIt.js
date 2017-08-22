// david

var repeatIt = function(str, n) {
  if (typeof str != 'string') {
    return 'Not a string';
  }
  return str.repeat(n);
};


// julio

function repeatIt(myString, num) {
  if (typeof myString === 'string') {
    return myString.repeat(num);
  } else {
    return 'Not a string';
  }
}
