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


// this version seems to work for all cases

function populate(init, myArray, myNumber, index) {
  for(var j=0; j<myNumber; j++) {
    console.log('myArray[index]: ' + myArray[index]);
    init = init + myArray[index];
    console.log('init en populate: ' + init);
    index = index + 1;
  }
  return init;
}

function getLongestConsecutive(myArray, myNumber) {

  //get initial value
  var init = '';
  init = populate(init, myArray, myNumber, 0);
  console.log('init inicial: ' + init);


  //replace if bigger length
  for(var i=0; i<myArray.length-myNumber+1; i++) {
    var next = '';
    next = populate(next, myArray, myNumber, i);
    if(next.length > init.length) {
      init = next;
    }
  }
  return ('init final: ' + init);
}

function longestConsec(myArray, myNumber) {
  if (myArray.length === 0 || myNumber > myArray.length || myNumber <= 0) {
    return '';
  } else {
    return getLongestConsecutive(myArray, myNumber);
  }
}
