let humanScore = "0";
let computerScore = "0";

function getComputerChoice() {
    const randomChoice = Math.random();
    if (randomChoice < 1/3) {
        return "rock";
    } else if (randomChoice < 2/3) {
        return "paper";
    } else {
        return "scissors";
    };
};

function getHumanChoice() {
    let humanChoice = prompt("What would you choose? Rock, paper, Scissors");
    return humanChoice ? humanChoice.toLowerCase() : "";
}

function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}, Computer chose: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("It's a draw!");
    } else if (
              (humanChoice === "rock" && computerChoice === "paper") ||
              (humanChoice === "paper" && computerChoice === "scissors") ||
              (humanChoice === "scissors" && computerChoice === "rock")
    ) {
        console.log("Ah you lose!");
        computerScore++;
    } else {
        console.log("You Win!");
        humanScore++;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);;
    }
    alert(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
}

playGame();

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);