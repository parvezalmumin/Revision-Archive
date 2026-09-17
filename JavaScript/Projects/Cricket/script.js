
function generateComputerChoice() {
          //This will generate random number between 0 and 3
        let randomNumber = Math.random() * 3;
        if (randomNumber > 0 && randomNumber <= 1) {
          computerChoice = 'Bat'; // computer will choice Bat
        } else if (randomNumber > 1 && randomNumber <= 2) {
          computerChoice = 'Ball'; // computer will choice Ball
        } else {
          computerChoice = 'Stump'; // computer will choice Ball
        }
}