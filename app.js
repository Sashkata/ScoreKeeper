const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const resetButton = document.querySelector("#reset");

let p1ScoreText = document.querySelector("#p1Score");
let p2ScoreText = document.querySelector("#p2Score");

let p1Score = 0;
let p2Score = 0;

p1Button.addEventListener("click", () => {
  p1Score += 1;
  p1ScoreText.textContent = p1Score;
});

p2Button.addEventListener("click", () => {
  p2Score += 1;
  p2ScoreText.textContent = p2Score;
});

resetButton.addEventListener("click", () => {
  p1Score = 0;
  p1ScoreText.textContent = p1Score;
  p2Score = 0;
  p2ScoreText.textContent = p2Score;
});
