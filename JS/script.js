let roundScore = 0;
let totalScore = 0;
let attempts = 1;

const changeH2s = function (currentDiceRoll) {
  const roundScoreH2 = document.querySelector("#roundscore");
  const totalScoreH2 = document.querySelector("#totalscore");
  const roundCounter = document.querySelector("#attempts");
  const currentRoll = document.querySelector("#currentRoll");
  currentRoll.innerText = `Current roll: ${currentDiceRoll}`;
  roundCounter.innerText = `Attempts: ${attempts}`;
  totalScoreH2.innerText = `Totalscore: ${totalScore}`;
  roundScoreH2.innerText = `Roundscore: ${roundScore}`;
};

const hold = function () {
  attempts++;
  totalScore += roundScore;
  roundScore = 0;
  changeH2s(0);
};

const rollDice = function () {
  const diceRoll = Math.floor(Math.random() * 6) + 1;
  currentRoll.innerText = diceRoll;
  if (diceRoll != 1) roundScore += diceRoll;
  else {
    roundScore = 0;
    totalScore += 1;
    setTotalScore();
  }
  changeH2s(diceRoll);
};

const startGame = function (event) {
  event.preventDefault();
  const inputEl = submit.querySelector("input");
  const inputText = inputEl.value;
  const playernameH2 = document.querySelector("#playername");
  playernameH2.innerText = `Player: ${inputText}`;
  submit.remove();

  const kasta = document.createElement("button");
  const frys = document.createElement("button");
  const section = document.querySelector("section");
  section.append(kasta);
  section.append(frys);
  kasta.innerText = "Dice!";
  frys.innerText = "Hold!";
  kasta.addEventListener("click", rollDice);
  frys.addEventListener("click", hold);
  changeH2s("Not yet rolled!");
};

const submit = document.querySelector("form");
submit.addEventListener("submit", startGame);
