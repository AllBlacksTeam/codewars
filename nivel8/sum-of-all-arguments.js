// http://www.codewars.com/kata/sum-of-all-arguments

// julio

function sum() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) total = total + arguments[i];
  return total;
}

/*

COMENTARIO: arguments es el array de argumentos por defecto en javascript

*/

// david
function sum() {
  var total = 0;
  for (var i in arguments) total += arguments[i];
  return total;
}
