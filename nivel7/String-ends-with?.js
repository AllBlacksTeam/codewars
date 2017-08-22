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
