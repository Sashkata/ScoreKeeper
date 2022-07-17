const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playTo");

let p1ScoreText = document.querySelector("#p1Score");
let p2ScoreText = document.querySelector("#p2Score");

let p1Score = 0;
let p2Score = 0;

let winningScore = 3;
let isGameFinished = false;

p1Button.addEventListener("click", () => {
  if (!isGameFinished) {
    p1Score += 1;
    if (checkGameOver(p1Score)) {
      assignWinners(p1ScoreText, p2ScoreText);
    }
    p1ScoreText.textContent = p1Score;
  }
});

p2Button.addEventListener("click", () => {
  if (!isGameFinished) {
    p2Score += 1;
    if (checkGameOver(p2Score)) {
      assignWinners(p2ScoreText, p1ScoreText);
    }
    p2ScoreText.textContent = p2Score;
  }
});

const resetGame = () => {
  p1Score = 0;
  p1ScoreText.textContent = p1Score;
  p2Score = 0;
  p2ScoreText.textContent = p2Score;
  isGameFinished = false;
  p1ScoreText.classList.remove("winner", "loser");
  p2ScoreText.classList.remove("winner", "loser");
};

resetButton.addEventListener("click", resetGame);

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  resetGame();
});

const assignWinners = (winner, loser) => {
  winner.classList.add("winner");
  loser.classList.add("loser");
};

const checkGameOver = (score) => {
  if (score === winningScore) {
    isGameFinished = true;
    return isGameFinished;
  }
};
