// https://www.codewars.com/kata/reverse-words

// julio

function reverseWords(myString) {
  var myArray = myString.split(' ');
  var output = [];
  for (var i = 0; i < myArray.length; i++) {
    var separado = myArray[i].split('');
    var reversed = separado.reverse();
    output.push(reversed.join(''));
  }
  return output.join(' ');
}

// david

function reverseWords(str) {
  var split = str.split(' ');
  var result = [];
  for (i in str) {
    result.push(str[i].split('').reverse().join(''));
  }
  return result.join(' ');
}
