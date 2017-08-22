// http://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript

// david

String.prototype.toJadenCase = function() {
  split = this.split(' ');

  jadenCase = [];
  for (var i in split) {
    jadenCase.push(
      split[i].charAt(0).toUpperCase() + split[i].slice(1).toLowerCase()
    );
  }

  return jadenCase.join(' ');
};


//julio

String.prototype.toJadenCase = function () {
  var toArray = this.split(' ');
  var output = [];
  for(var i=0; i<toArray.length; i++) {
    var cased = (toArray[i][0]).toUpperCase() + toArray[i].slice(1);
    output.push(cased);
  }
  return output.join(' ');
}
