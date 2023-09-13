const getComputerChoice = () => {
  let choices = ['Rock', 'Paper', 'Scissors']; // Create an array to store game's options
  return choices[Math.floor(Math.random() * choices.length)]; // Generate a random index between 0 and the length of the choices array to allow the computer to choose one of the 3 game options.
};
