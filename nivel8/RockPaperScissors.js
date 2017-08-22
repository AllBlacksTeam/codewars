// david

const rps = (p1, p2) => {
  var p1winner = { rock: 'scissors', paper: 'rock', scissors: 'paper' };

  if (p1 == p2) {
    winner = 'Draw!';
  } else {
    if (p1winner[p1] == p2) {
      winner = 'Player 1 won!';
    } else {
      winner = 'Player 2 won!';
    }
  }

  return winner;
};

/*

COMENTARIO: se recomienda utilizar === en vez de ==

*/



// julio

function rps(player1, player2) {
  var one = 'Player 1 won!';
  var two = 'Player 2 won!';
  var draw = 'Draw!';

  if (player1 === 'scissors') {
    switch(player2) {
    case 'paper':
        return one;
        break;
    case 'rock':
        return two;
        break;
    default:
        return draw;
    }
  }

  else if (player1 === 'paper') {
    switch(player2) {
    case 'rock':
        return one;
        break;
    case 'scissors':
        return two;
        break;
    default:
        return draw;
    }
  }

  else if (player1 === 'rock') {
    switch(player2) {
    case 'scissors':
        return one;
        break;
    case 'paper':
        return two;
        break;
    default:
        return draw;
    }
  }

}
