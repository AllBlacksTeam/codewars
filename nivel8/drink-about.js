/*
https://www.codewars.com/kata/drink-about
*/

//julio

function peopleWithAgeDrink(age) {
  if (age < 14) {
    return 'drink toddy';
  } else if (age < 18) {
    return 'drink coke';
  } else if (age < 21) {
    return 'drink beer';
  } else {
    return 'drink whisky';
  }
}

//david

function peopleWithAgeDrink(old) {
  if (old < 14) {
    drink = 'drink toddy';
  } else if (old >= 14 && old < 18) {
    drink = 'drink coke';
  } else if (old >= 18 && old < 21) {
    drink = 'drink beer';
  } else {
    drink = 'drink whisky';
  }

  return drink;
}
