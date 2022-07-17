const p1 = {
  score: 0,
  button: document.querySelector("#p1Button"),
  display: document.querySelector("#p1Score"),
};
const p2 = {
  score: 0,
  button: document.querySelector("#p2Button"),
  display: document.querySelector("#p2Score"),
};

const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playTo");

let winningScore = 3;
let isGameFinished = false;

const winningClass = "has-text-success";
const losingClass = "has-text-danger";

function updateScores(player, opponent) {
  if (!isGameFinished) {
    player.score += 1;
    if (checkGameOver(player.score)) {
      assignWinners(player.display, opponent.display);
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

p1.button.addEventListener("click", () => {
  updateScores(p1, p2);
});

p2.button.addEventListener("click", () => {
  updateScores(p2, p1);
});

const resetGame = () => {
  resetPlayer(p1);
  resetPlayer(p2);
  isGameFinished = false;
};

const resetPlayer = (player) => {
  player.score = 0;
  player.display.textContent = player.score;
  player.display.classList.remove(winningClass, losingClass);
  player.button.disabled = false;
};

resetButton.addEventListener("click", resetGame);

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  resetGame();
});

const assignWinners = (winner, loser) => {
  winner.classList.add(winningClass);
  loser.classList.add(losingClass);
};

const checkGameOver = (score) => {
  if (score === winningScore) {
    isGameFinished = true;
    return isGameFinished;
  }
};
