// http://www.codewars.com/kata/esrever/train/javascript

// david
reverse = function(input) {
  var esrever = new Array();
  for (var i = input.length - 1; i >= 0; i--) {
    esrever.push(input[i]);
  }
  return esrever;
};


// julio

function reverse(myArray) {
  var output = [];
  for (var i=myArray.length-1; i>-1 ; i--) {
    output.push(myArray[i]);
  }
  return output;
}
