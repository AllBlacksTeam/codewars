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
