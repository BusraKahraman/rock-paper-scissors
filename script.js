const getComputerChoice = () => {
  let choices = ['Rock', 'Paper', 'Scissors']; // Create an array to store game's options
  return choices[Math.floor(Math.random() * choices.length)]; // Generate a random index between 0 and the length of the choices array to allow the computer to choose one of the 3 game options.
};

const playRound = (playerSelection, computerSelection) => {
  // all outcomes for a round
  if (
    playerSelection.toLowerCase() === 'rock' &&
    computerSelection === 'Rock'
  ) {
    return 'draw';
  } else if (
    playerSelection.toLowerCase() === 'rock' &&
    computerSelection === 'Paper'
  ) {
    return 'You lose! Paper beats Rock!';
  } else if (
    playerSelection.toLowerCase() === 'rock' &&
    computerSelection === 'Scissors'
  ) {
    return 'You win! Rock beats Scissors!';
  } else if (
    playerSelection.toLowerCase() === 'paper' &&
    computerSelection === 'Rock'
  ) {
    return 'You win! Paper beats Rock!';
  } else if (
    playerSelection.toLowerCase() === 'paper' &&
    computerSelection === 'Paper'
  ) {
    return 'Draw';
  } else if (
    playerSelection.toLowerCase() === 'paper' &&
    computerSelection === 'Scissors'
  ) {
    return 'You lose! Scissors beats Paper!';
  } else if (
    playerSelection.toLowerCase() === 'scissors' &&
    computerSelection === 'Rock'
  ) {
    return 'You lose! Rock beats Scissors!';
  } else if (
    playerSelection.toLowerCase() === 'scissors' &&
    computerSelection === 'Paper'
  ) {
    return 'You win! Scissors beats Paper!';
  } else if (
    playerSelection.toLowerCase() === 'scissors' &&
    computerSelection === 'Scissors'
  ) {
    return 'Draw';
  }
};

const playerSelection = 'rock'; // setting a default value for player for now
const computerSelection = getComputerChoice(); // get computers choice randomly
console.log(
  'Player selection: ',
  playerSelection,
  '\nComputer Selection: ',
  computerSelection,
  '\nResult: ',
  playRound(playerSelection, computerSelection)
);
