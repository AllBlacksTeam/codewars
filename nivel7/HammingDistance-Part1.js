// http://www.codewars.com/kata/hamming-distance-part-1-binary-codes/train/javascript

// david
function hammingDistance(a, b) {
  word1 = a.split('');
  word2 = b.split('');

  dif = 0;
  for (var i in word1) {
    if (word1[i] !== word2[i]) dif += 1;
  }
  return dif;
}

// COMENTARIO: ojo, si defines las variables sin var son globales



// julio

function hammingDistance(string1, string2) {
  var total = 0;
  for (var i=0; i<string1.length; i++) {
    if (string1[i] != string2[i]) {
      total = total + 1;
    }
  }
  return total;
}
