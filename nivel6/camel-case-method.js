// http://www.codewars.com/kata/camelcase-method/

// julio

String.prototype.camelCase = function() {
  var myArray = this.split(' ');
  var output = [];

  for (var i = 0; i < myArray.length; i++) {
    var nuevoArray = myArray[i].split('');
    if (nuevoArray.length !== 0) {
      var may = nuevoArray[0].toUpperCase();
      nuevoArray.splice(0, 1);
      nuevoArray.unshift(may);
      output.push(nuevoArray.join(''));
    }
  }
  return output.join('');
};

// david

String.prototype.camelCase = function() {
  var split = this.split(' ');
  var camelCase = [];

  for (var i in split) {
    camelCase.push(
      split[i].charAt(0).toUpperCase() + split[i].slice(1).toLowerCase()
    );
  }
  return camelCase.join('');
};
