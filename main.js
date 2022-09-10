const rockButton = document.getElementById("rock-button");
const paperButton = document.getElementById("paper-button");
const scissorsButton = document.getElementById("scissors-button");
const choiceButtons = document.getElementsByClassName("buttons");
const result = document.getElementById("result");
const winStats = document.getElementById("win-stats");
const scoreStats = document.getElementById("score-stats");
let score = null;
let maxScore = 0;
let games = 0;
let wins = 0;
let losses = 0;
let draws = 0;
let winner = "";
let p1 = "";
let p2 = "";
compChoice = {
  0: "rock",
  1: "paper",
  2: "scissors",
};
winsAgainst = {
  rock: "paper",
  paper: "scissors",
  scissors: "rock",
};

// p1: Player , p2: Computer

for (let i = 0; i < 3; i++) {
  button = choiceButtons[i];
  button.addEventListener("click", (e) => {
    if (e.target.id == "rock-button") {
      p1 = "rock";
    }
    if (e.target.id == "paper-button") {
      p1 = "paper";
    }
    if (e.target.id == "scissors-button") {
      p1 = "scissors";
    }
    p2 = compChoice[Math.floor(Math.random() * 3)];
    winner = winCalc(p1, p2);
    result.textContent = winner;
    winStats.textContent = `Wins: ${wins} | Losses: ${losses} | Ties: ${draws} | Games played: ${games}`;
    scoreStats.textContent = `Score: ${score} | Max score: ${maxScore}`;
  });
}

function winCalc(p1, p2) {
  if (p1 == winsAgainst[p2]) {
    wins += 1;
    score += 1;
    temp = `I chose ${p2}, You win this time...`;
  }
  if (p2 == winsAgainst[p1]) {
    losses += 1;
    score -= 1;
    temp = `I chose ${p2}! You lose!`;
  }
  if (p1 == p2) {
    draws += 1;
    temp = `I chose ${p2} as well! Its a draw!`;
  }

  if (score > maxScore || score == null) {
    maxScore = score;
  }
  games += 1;
  return temp;
}
