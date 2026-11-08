
function generateComputerChoice() {

  // Generate a random number between 0 and 3
  let randomNumber = Math.random() * 3;

  // Generate computer choice
  if (randomNumber > 0 && randomNumber <= 1) {
    return 'Bat';

  } else if (randomNumber > 1 && randomNumber <= 2) {
    return 'Ball';

  } else {
    return 'Stump';
  }
}


// Main game function
function playGame(userChoice) {

  // Generate computer choice
  let computerChoice = generateComputerChoice();

  let resultMsg;

  // Check the result
  if (userChoice === computerChoice) {
    resultMsg = 'It is a Tie';

  } else if (
    (userChoice === 'Bat' && computerChoice === 'Ball') ||
    (userChoice === 'Ball' && computerChoice === 'Stump') ||
    (userChoice === 'Stump' && computerChoice === 'Bat')
  ) {
    resultMsg = 'User Won';

  } else {
    resultMsg = 'Computer has Won';
  }

  // Display the result
  alert(
    `You have chosen ${userChoice}. Computer choice is ${computerChoice}. ${resultMsg}`
  );
}
