// https://www.codewars.com/kata/format-a-string-of-names-like-bart-lisa-and-maggie

// julio

function list(arrayObjects) {
  var output = [];
  for(var i=0; i<arrayObjects.length; i++) {
    output.push(arrayObjects[i].name);
  }
  if(output.length > 1) {
    var last = output.length - 1;
    var ultimo = ' & ' + output[last];
    output.pop();
    return output.join(', ') + ultimo;
  }
  return output.join('');
}
