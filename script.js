const getComputerChoice = () => {
  let choices = ['Rock', 'Paper', 'Scissors']; // Create an array to store game's options
  return choices[Math.floor(Math.random() * choices.length)]; // Generate a random index between 0 and the length of the choices array to allow the computer to choose one of the 3 game options.
};

const playRound = (playerSelection, computerSelection) => {
  // all outcomes for a round
  if (playerSelection === 'rock' && computerSelection === 'Rock') {
    return 'Draw';
  } else if (playerSelection === 'rock' && computerSelection === 'Paper') {
    return 'You lose! Paper beats Rock!';
  } else if (playerSelection === 'rock' && computerSelection === 'Scissors') {
    return 'You win! Rock beats Scissors!';
  } else if (playerSelection === 'paper' && computerSelection === 'Rock') {
    return 'You win! Paper beats Rock!';
  } else if (playerSelection === 'paper' && computerSelection === 'Paper') {
    return 'Draw';
  } else if (playerSelection === 'paper' && computerSelection === 'Scissors') {
    return 'You lose! Scissors beats Paper!';
  } else if (playerSelection === 'scissors' && computerSelection === 'Rock') {
    return 'You lose! Rock beats Scissors!';
  } else if (playerSelection === 'scissors' && computerSelection === 'Paper') {
    return 'You win! Scissors beats Paper!';
  } else if (
    playerSelection === 'scissors' &&
    computerSelection === 'Scissors'
  ) {
    return 'Draw';
  }
};

const game = () => {
  let playerCount = 0;
  let computerCount = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('Rock, Paper, Scissors?').toLowerCase(); // prompt the player to choose between rock paper scissors
    const computerSelection = getComputerChoice(); // get computer's choice randomly
    const result = playRound(playerSelection, computerSelection);
    console.log(
      'Player selection: ',
      playerSelection,
      '\nComputer Selection: ',
      computerSelection,
      '\nResult: ',
      result
    );

    if (result.includes('win')) {
      // Player wins
      playerCount++;
    } else if (result.includes('lose')) {
      // Computer wins
      computerCount++;
    }
  }

  if (playerCount > computerCount) {
    console.log('You win!');
  } else if (playerCount < computerCount) {
    console.log('You lose!');
  } else {
    console.log(`It's a tie!`);
  }
};

game();
