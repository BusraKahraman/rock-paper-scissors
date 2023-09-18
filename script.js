// Create elements
const rockButton = document.createElement('button');
rockButton.textContent = 'Rock';
const paperButton = document.createElement('button');
paperButton.textContent = 'Paper';
const scissorsButton = document.createElement('button');
scissorsButton.textContent = 'Scissors';
const div = document.createElement('div');
const player = document.createElement('p');
const computer = document.createElement('p');
const result = document.createElement('p');

// Add them to html

document.body.appendChild(rockButton);
document.body.appendChild(paperButton);
document.body.appendChild(scissorsButton);
div.appendChild(player);
div.appendChild(computer);
div.appendChild(result);
document.body.appendChild(div);

const getComputerChoice = () => {
  let choices = ['Rock', 'Paper', 'Scissors']; // Create an array to store game's options
  return choices[Math.floor(Math.random() * choices.length)]; // Generate a random index between 0 and the length of the choices array to allow the computer to choose one of the 3 game options.
};

const playRound = (playerSelection, computerSelection) => {
  // all outcomes for a round
  if (playerSelection === 'Rock' && computerSelection === 'Rock') {
    return 'Draw';
  } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
    return 'You lose! Paper beats Rock!';
  } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
    return 'You win! Rock beats Scissors!';
  } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    return 'You win! Paper beats Rock!';
  } else if (playerSelection === 'Paper' && computerSelection === 'Paper') {
    return 'Draw';
  } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
    return 'You lose! Scissors beats Paper!';
  } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
    return 'You lose! Rock beats Scissors!';
  } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
    return 'You win! Scissors beats Paper!';
  } else if (
    playerSelection === 'Scissors' &&
    computerSelection === 'Scissors'
  ) {
    return 'Draw';
  }
};

const handleButtonClick = (event) => {
  const playerSelection = event.target.textContent;
  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);

  player.textContent = `You chose: ${playerSelection}`;
  computer.textContent = `Computer chose: ${computerSelection}`;

  if (result.includes('win')) {
    // Player wins
    playerScore++;
    updateScore();
  } else if (result.includes('lose')) {
    // Computer wins
    computerScore++;
    updateScore();
  }

  if (playerScore === 5 || computerScore === 5) {
    announceWinner();
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
  }
};

rockButton.addEventListener('click', handleButtonClick);
paperButton.addEventListener('click', handleButtonClick);
scissorsButton.addEventListener('click', handleButtonClick);

let playerScore = 0;
let computerScore = 0;

const updateScore = () => {
  result.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
};

const announceWinner = () => {
  if (playerScore === 5) {
    result.textContent = 'You win!';
  } else if (computerScore === 5) {
    result.textContent = 'You lost!';
  }
};
