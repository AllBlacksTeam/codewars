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
