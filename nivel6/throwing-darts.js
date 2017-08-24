// https://www.codewars.com/kata/throwing-darts

// julio

function scoreThrows(myArray) {
  if(myArray.length === 0) {
    return 0;
  }
  var output = 0;
  var bonus = 0;
  for(var i=0; i<myArray.length; i++) {
    var radius = myArray[i];
    if (radius < 5) {
      output += 10;
      bonus += 1;
      if (bonus === myArray.length) {
        output += 100;
      }
    } else if (radius > 10) {
      output += 0;
    } else {
      output += 5;
    }
  }

  return output;
}
