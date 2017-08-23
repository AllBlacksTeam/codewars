// http://www.codewars.com/kata/string-ends-with

//david
function solution(str, ending) {
  var dif = str.length - ending.length;

  return str.slice(dif) === ending;
}

/*

TDD :
describe("Solution", function(){
  it("should test for something", function(){
    Test.assertEquals(solution('samurai','ai'), true, "Texto");
  });
});

*/

// ***  endsWith()


// julio
function solution(string1, string2) {
  var total = 0;
  var array1 = string1.split('').reverse();
  var array2 = string2.split('').reverse();
  for(var i=0; i<array2.length; i++) {
    if(array2[i] === array1[i]) {
      total += 1;
    }
  }

  return (total === array2.length) ? true : false;
}
