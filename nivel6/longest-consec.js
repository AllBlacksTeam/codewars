// https://www.codewars.com/kata/consecutive-strings

// julio

// this version works for myNumber = 2

function getLongestConsecutive(myArray, myNumber) {
  var init = myArray[0] + myArray[1];
  for(var i=0; i<myArray.length-1; i++) {
    var next = myArray[i] + myArray[i+1];
    if(next.length > init.length) {
      init = next;
    }
  }
  return init;
}

function longestConsec(myArray, myNumber) {
  if (myArray.length === 0 || myNumber > myArray.length || myNumber <= 0) {
    return '';
  } else {
    return getLongestConsecutive(myArray, myNumber);
  }
}
