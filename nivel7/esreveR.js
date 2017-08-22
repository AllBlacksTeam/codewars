// http://www.codewars.com/kata/esrever/train/javascript

// david
reverse = function(input) {
  var esrever = new Array();
  for (var i = input.length - 1; i >= 0; i--) {
    esrever.push(input[i]);
  }
  return esrever;
};
