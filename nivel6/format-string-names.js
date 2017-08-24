// https://www.codewars.com/kata/format-a-string-of-names-like-bart-lisa-and-maggie

// julio

function list(arrayObjects) {
  var output = [];
  for (var i = 0; i < arrayObjects.length; i++) {
    output.push(arrayObjects[i].name);
  }
  if (output.length > 1) {
    var last = output.length - 1;
    var ultimo = ' & ' + output[last];
    output.pop();
    return output.join(', ') + ultimo;
  }
  return output.join('');
}

// david

function list(names) {
  if (names.length === 0) return '';
  if (names.length === 1) return names[0].name;
  var result = [];

  for (var i in names) {
    result.push(names[i].name);
  }
  var final = ' & ' + result[result.length - 1];
  result.pop();
  return result.join(', ') + final;
}
