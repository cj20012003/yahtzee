//let canClickScoreboard = ["ones, twos ,threes, fours, fives, sixes, Three-of-a-kind, Four-of-a-kind, Full-house, Small-straight, Large-straight, Yahtzee, Chance"]
let canClickScoreboard = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];
let buttonActive = true;
let heldDice = [false, false, false, false, false];
let heldScores = [false, false, false, false, false, false];
let heldScoresOfAKind = [false, false];
let heldScoresFullHouse = false;
let heldScoresSmallStraight = false;
let heldScoresLargeStraight = false;
let heldScoresYahtzee = false;
let heldScoresChance = false;
let scoreName = ["ones", "twos", "threes", "fours", "fives", "sixes"];

let dobbelsteenWaarde = [];
let rollCounter = 0;
let scoreOnes = 0;
let scoreTwos = 0;
let scoreThrees = 0;
let scoreFours = 0;
let scoreFives = 0;
let scoreSixes = 0;
let scoreThreeOfAKind = 0;
let scoreFourOfAKind = 0;
let scoreFullHouse = 0;
let scoreSmallStraight = 0;
let scoreLargeStraight = 0;
let scoreYahtzee = 0;
let scoreChance = 0;
let totalScore = 0;

document.getElementById("myBtn").onclick = roll;
document.getElementById("diceOne").onclick = holdDiceOne;
document.getElementById("diceTwo").onclick = holdDiceTwo;
document.getElementById("diceThree").onclick = holdDiceThree;
document.getElementById("diceFour").onclick = holdDiceFour;
document.getElementById("diceFive").onclick = holdDiceFive;

function roll() {
  rollCounter++;
  if (buttonActive) {
    createRandomDiceArray();
    showDobbelsteenWaarde();
    telAantalDobbelsteenOgen();
    telPunten();
    checkIfThreeOfAKind();
    checkIfFourOfAKind();
    checkIfFullHouse();
    checkIfSmallStraight();
    checkIfLargeStraight();
    checkIfYahtzee();
    checkIfChance();
    resetAfterThreeRolls();
    countTotalScore();
    clickScoreboard();
  }
}
function createRandomNumber() {
  for (let i = 0; i < 5; i++) {
    if (!heldDice[i]) {
      const randomNummer = Math.floor(Math.random() * 6) + 1;
      dobbelsteenWaarde[i] = randomNummer;
    }
  }
}
function createRandomDiceArray() {
  if (dobbelsteenWaarde.length === 0) {
    dobbelsteenWaarde = [0, 0, 0, 0, 0];
  }
  createRandomNumber();
}
function telAantalDobbelsteenOgen(ogen) {
  let teller = 0;
  for (let i = 0; i < 5; i++) {
    if (dobbelsteenWaarde[i] == ogen) {
      teller++;
    }
    if (teller == 5) {
      break;
    }
  }
  return teller;
}
function showDobbelsteenWaarde() {
  document.getElementById("diceOne").innerHTML = dobbelsteenWaarde[0];
  document.getElementById("diceTwo").innerHTML = dobbelsteenWaarde[1];
  document.getElementById("diceThree").innerHTML = dobbelsteenWaarde[2];
  document.getElementById("diceFour").innerHTML = dobbelsteenWaarde[3];
  document.getElementById("diceFive").innerHTML = dobbelsteenWaarde[4];
}
function telPunten() {
  for (let i = 0; i < heldScores.length; i++) {
    if (!heldScores[i]) {
      canClickScoreboard[i] = true;
      document.getElementById(scoreName[i]).textContent =
        telAantalDobbelsteenOgen(i + 1) * (i + 1);
    }
  }
}
function checkIfThreeOfAKind() {
  resetThreeOfAKind();
  for (let i = 0; i <= 6; i++) {
    if (telAantalDobbelsteenOgen(i) >= 3 && !heldScoresOfAKind[0]) {
      canClickScoreboard[6] = true;
      document.getElementById("Three-of-a-kind").innerHTML = i * 3;
    }
  }
}

function checkIfFourOfAKind() {
  resetFourOfAKind();
  for (let i = 0; i <= 6; i++) {
    if (telAantalDobbelsteenOgen(i) >= 4 && !heldScoresOfAKind[1]) {
      canClickScoreboard[7] = true;
      document.getElementById("Four-of-a-kind").innerHTML = i * 4;
    }
  }
}
function checkIfFullHouse() {
  if (!heldScoresFullHouse) {
    document.getElementById("Full-house").innerHTML = "0";
    for (let i = 0; i <= 6; i++) {
      if (telAantalDobbelsteenOgen(i) == 3 && !heldScoresFullHouse) {
        for (let j = 0; j <= 6; j++) {
          if (telAantalDobbelsteenOgen(j) == 2) {
            canClickScoreboard[8] = true;
            document.getElementById("Full-house").innerHTML = "25";
          }
        }
      }
    }
  }
}
function checkIfSmallStraight() {
  if (!heldScoresSmallStraight) {
    document.getElementById("Small-straight").innerHTML = "0";
    for (let i = 0; i <= 6; i++) {
      if (dobbelsteenWaarde[i] == 1) {
        for (let j = 0; j <= 6; j++) {
          if (dobbelsteenWaarde[j] == 2) {
            for (let k = 0; k <= 6; k++) {
              if (dobbelsteenWaarde[k] == 3) {
                for (let l = 0; l <= 6; l++) {
                  if (dobbelsteenWaarde[l] == 4) {
                    document.getElementById("Small-straight").innerHTML = "30";
                    canClickScoreboard[9] = true;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (!heldScoresSmallStraight) {
    for (let i = 0; i <= 6; i++) {
      if (dobbelsteenWaarde[i] == 2) {
        for (let j = 0; j <= 6; j++) {
          if (dobbelsteenWaarde[j] == 3) {
            for (let k = 0; k <= 6; k++) {
              if (dobbelsteenWaarde[k] == 4) {
                for (let l = 0; l <= 6; l++) {
                  if (dobbelsteenWaarde[l] == 5) {
                    document.getElementById("Small-straight").innerHTML = "30";
                    canClickScoreboard[9] = true;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (!heldScoresSmallStraight) {
    for (let i = 0; i <= 6; i++) {
      if (dobbelsteenWaarde[i] == 3) {
        for (let j = 0; j <= 6; j++) {
          if (dobbelsteenWaarde[j] == 4) {
            for (let k = 0; k <= 6; k++) {
              if (dobbelsteenWaarde[k] == 5) {
                for (let l = 0; l <= 6; l++) {
                  if (dobbelsteenWaarde[l] == 6) {
                    document.getElementById("Small-straight").innerHTML = "30";
                    canClickScoreboard[9] = true;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

function checkIfLargeStraight() {
  if (!heldScoresLargeStraight) {
    document.getElementById("Large-straight").innerHTML = "0";
    for (let i = 0; i <= 6; i++) {
      if (dobbelsteenWaarde[i] == 1) {
        for (let j = 0; j <= 6; j++) {
          if (dobbelsteenWaarde[j] == 2) {
            for (let k = 0; k <= 6; k++) {
              if (dobbelsteenWaarde[k] == 3) {
                for (let l = 0; l <= 6; l++) {
                  if (dobbelsteenWaarde[l] == 4) {
                    for (let m = 0; m <= 6; m++) {
                      if (dobbelsteenWaarde[m] == 5) {
                        document.getElementById("Large-straight").innerHTML =
                          "40";
                        canClickScoreboard[10] = true;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (!heldScoresLargeStraight) {
    for (let i = 0; i <= 6; i++) {
      if (dobbelsteenWaarde[i] == 2) {
        for (let j = 0; j <= 6; j++) {
          if (dobbelsteenWaarde[j] == 3) {
            for (let k = 0; k <= 6; k++) {
              if (dobbelsteenWaarde[k] == 4) {
                for (let l = 0; l <= 6; l++) {
                  if (dobbelsteenWaarde[l] == 5) {
                    for (let m = 0; m <= 6; m++) {
                      if (dobbelsteenWaarde[m] == 6) {
                        document.getElementById("Large-straight").innerHTML =
                          "40";
                        canClickScoreboard[10] = true;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function checkIfYahtzee() {
  for (let i = 0; i <= 6; i++) {
    document.getElementById("Yahtzee").innerHTML = "0";
    if (telAantalDobbelsteenOgen(i) == 5 && !heldScoresYahtzee) {
      document.getElementById("Yahtzee").innerHTML = "50";
      canClickScoreboard[11] = true;
      break;
    }
  }
}
function checkIfChance() {
  if (!heldScoresChance) {
    canClickScoreboard[12] = true;
    document.getElementById("Chance").innerHTML =
      dobbelsteenWaarde[0] +
      dobbelsteenWaarde[1] +
      dobbelsteenWaarde[2] +
      dobbelsteenWaarde[3] +
      dobbelsteenWaarde[4];
  }
}
function holdDiceOne() {
  heldDice[0] = true;
  document.getElementById("diceOne").style.backgroundColor = "salmon";
}
function holdDiceTwo() {
  heldDice[1] = true;
  document.getElementById("diceTwo").style.backgroundColor = "salmon";
}
function holdDiceThree() {
  heldDice[2] = true;
  document.getElementById("diceThree").style.backgroundColor = "salmon";
}
function holdDiceFour() {
  heldDice[3] = true;
  document.getElementById("diceFour").style.backgroundColor = "salmon";
}
function holdDiceFive() {
  heldDice[4] = true;
  document.getElementById("diceFive").style.backgroundColor = "salmon";
}
function holdScoreOnes() {
  heldScores[0] = true;
  scoreOnes = telAantalDobbelsteenOgen(1) * 1;
  document.getElementById(scoreName[0]).style.backgroundColor = "salmon";
  resetThreeOfAKind();
  resetFourOfAKind();
  resetSmallStraight();
  resetLargeStraight();
  resetYahtzee();
  countTotalScore();
  resetDices();
}
function holdScoreTwos() {
  heldScores[1] = true;
  scoreTwos = telAantalDobbelsteenOgen(2) * 2;
  document.getElementById(scoreName[1]).style.backgroundColor = "salmon";
  resetThreeOfAKind();
  resetFourOfAKind();
  resetSmallStraight();
  resetLargeStraight();
  resetYahtzee();
  countTotalScore();
  resetDices();
}
function holdScoreThrees() {
  heldScores[2] = true;
  scoreThrees = telAantalDobbelsteenOgen(3) * 3;
  document.getElementById(scoreName[2]).style.backgroundColor = "salmon";
  resetThreeOfAKind();
  resetFourOfAKind();
  resetSmallStraight();
  resetLargeStraight();
  resetYahtzee();
  countTotalScore();
  resetDices();
}
function holdScoreFours() {
  heldScores[3] = true;
  scoreFours = telAantalDobbelsteenOgen(4) * 4;
  document.getElementById(scoreName[3]).style.backgroundColor = "salmon";
  resetThreeOfAKind();
  resetFourOfAKind();
  resetSmallStraight();
  resetLargeStraight();
  resetYahtzee();
  countTotalScore();
  resetDices();
}
function holdScoreFives() {
  heldScores[4] = true;
  scoreFives = telAantalDobbelsteenOgen(5) * 5;
  document.getElementById(scoreName[4]).style.backgroundColor = "salmon";
  resetThreeOfAKind();
  resetFourOfAKind();
  resetSmallStraight();
  resetLargeStraight();
  resetYahtzee();
  countTotalScore();
  resetDices();
}
function holdScoreSixes() {
  heldScores[5] = true;
  scoreSixes = telAantalDobbelsteenOgen(6) * 6;
  document.getElementById(scoreName[5]).style.backgroundColor = "salmon";
  resetThreeOfAKind();
  resetFourOfAKind();
  resetSmallStraight();
  resetLargeStraight();
  resetYahtzee();
  countTotalScore();
  resetDices();
}
function holdScoresThreeOfAKind() {
  heldScoresOfAKind[0] = true;
  for (let i = 0; i <= 6; i++) {
    if (telAantalDobbelsteenOgen(i) >= 3 && heldScoresOfAKind[0]) {
      scoreThreeOfAKind = i * 3;
    }
  }
  document.getElementById("Three-of-a-kind").style.backgroundColor = "salmon";
  resetThreeOfAKind();
  resetFourOfAKind();
  resetSmallStraight();
  resetLargeStraight();
  resetYahtzee();
  countTotalScore();
  resetDices();
}
function holdScoresFourOfAKind() {
  heldScoresOfAKind[1] = true;
  for (let i = 0; i <= 6; i++) {
    if (telAantalDobbelsteenOgen(i) >= 4 && heldScoresOfAKind[1]) {
      scoreFourOfAKind = i * 4;
    }
  }
  document.getElementById("Four-of-a-kind").style.backgroundColor = "salmon";
  resetThreeOfAKind();
  resetFourOfAKind();
  resetSmallStraight();
  resetLargeStraight();
  resetYahtzee();
  countTotalScore();
  resetDices();
}
function holdScoresFullHouse() {
  heldScoresFullHouse = true;
  scoreFullHouse = 25;
  document.getElementById("Full-house").style.backgroundColor = "salmon";
  resetThreeOfAKind();
  resetFourOfAKind();
  resetSmallStraight();
  resetLargeStraight();
  resetYahtzee();
  countTotalScore();
  resetDices();
}
function holdScoresSmallStraight() {
  heldScoresSmallStraight = true;
  scoreSmallStraight = 30;
  document.getElementById("Small-straight").style.backgroundColor = "salmon";
  resetThreeOfAKind();
  resetFourOfAKind();
  resetSmallStraight();
  resetLargeStraight();
  resetYahtzee();
  countTotalScore();
  resetDices();
}
function holdScoresLargeStraight() {
  heldScoresLargeStraight = true;
  scoreLargeStraight = 40;
  document.getElementById("Large-straight").style.backgroundColor = "salmon";
  resetThreeOfAKind();
  resetFourOfAKind();
  resetSmallStraight();
  resetLargeStraight();
  resetYahtzee();
  countTotalScore();
  resetDices();
}
function holdScoresYahtzee() {
  heldScoresYahtzee = true;
  scoreYahtzee = 50;
  document.getElementById("Yahtzee").style.backgroundColor = "salmon";
  resetThreeOfAKind();
  resetFourOfAKind();
  resetSmallStraight();
  resetLargeStraight();
  resetYahtzee();
  countTotalScore();
  resetDices();
}
function holdScoresChance() {
  heldScoresChance = true;
  scoreChance =
    dobbelsteenWaarde[0] +
    dobbelsteenWaarde[1] +
    dobbelsteenWaarde[2] +
    dobbelsteenWaarde[3] +
    dobbelsteenWaarde[4];
  document.getElementById("Chance").style.backgroundColor = "salmon";
  resetThreeOfAKind();
  resetFourOfAKind();
  resetSmallStraight();
  resetLargeStraight();
  resetYahtzee();
  countTotalScore();
  resetDices();
}
function countTotalScore() {
  totalScore =
    scoreOnes +
    scoreTwos +
    scoreThrees +
    scoreFours +
    scoreFives +
    scoreSixes +
    scoreThreeOfAKind +
    scoreFourOfAKind +
    scoreFullHouse +
    scoreSmallStraight +
    scoreLargeStraight +
    scoreYahtzee +
    scoreChance;
  document.getElementById("Total-score").innerHTML = totalScore;
  return totalScore;
}
function resetAfterThreeRolls() {
  if (rollCounter == 0) {
    document.getElementById("resultaten").innerHTML = "3 rolls left!!!";
  }
  if (rollCounter == 1) {
    document.getElementById("resultaten").innerHTML = "2 rolls left!!!";
  }
  if (rollCounter == 2) {
    document.getElementById("resultaten").innerHTML = "1 rolls left!!!";
  }
  if (rollCounter == 3) {
    document.getElementById("resultaten").innerHTML = "0 rolls left!!!";
    buttonActive = false;
  }
}
function resetDices() {
  rollCounter = 0;
  buttonActive = true;
  for (let i = 0; i < 5; i++) {
    heldDice[i] = false;
  }
  resetAfterThreeRolls();
  document.getElementById("diceOne").textContent = " ";
  document.getElementById("diceTwo").textContent = " ";
  document.getElementById("diceThree").textContent = " ";
  document.getElementById("diceFour").textContent = " ";
  document.getElementById("diceFive").textContent = " ";
  document.getElementById("diceOne").style.backgroundColor = " #ABD7EB";
  document.getElementById("diceTwo").style.backgroundColor = " #ABD7EB";
  document.getElementById("diceThree").style.backgroundColor = " #ABD7EB";
  document.getElementById("diceFour").style.backgroundColor = " #ABD7EB";
  document.getElementById("diceFive").style.backgroundColor = " #ABD7EB";
}
function resetThreeOfAKind() {
  if (!heldScoresOfAKind[0]) {
    document.getElementById("Three-of-a-kind").innerHTML = "0";
  }
}
function resetFourOfAKind() {
  if (!heldScoresOfAKind[1]) {
    document.getElementById("Four-of-a-kind").innerHTML = "0";
  }
}
function resetSmallStraight() {
  if (!heldScoresSmallStraight) {
    document.getElementById("Small-straight").innerHTML = "0";
  }
}
function resetLargeStraight() {
  if (!heldScoresLargeStraight) {
    document.getElementById("Large-straight").innerHTML = "0";
  }
}
function resetYahtzee() {
  if (!heldScoresLargeStraight) {
    document.getElementById("Yahtzee").innerHTML = "0";
  }
}
//function allowClickOnOnesToSixes{
//}
function clickScoreboard() {
  if (canClickScoreboard[0]) {
    document.getElementById("ones").onclick = holdScoreOnes;
  }
  if (canClickScoreboard[1]) {
    document.getElementById("twos").onclick = holdScoreTwos;
  }
  if (canClickScoreboard[2]) {
    document.getElementById("threes").onclick = holdScoreThrees;
  }
  if (canClickScoreboard[3]) {
    document.getElementById("fours").onclick = holdScoreFours;
  }
  if (canClickScoreboard[4]) {
    document.getElementById("fives").onclick = holdScoreFives;
  }
  if (canClickScoreboard[5]) {
    document.getElementById("sixes").onclick = holdScoreSixes;
  }
  if (canClickScoreboard[6]) {
    document.getElementById("Three-of-a-kind").onclick = holdScoresThreeOfAKind;
  }
  if (canClickScoreboard[7]) {
    document.getElementById("Four-of-a-kind").onclick = holdScoresFourOfAKind;
  }
  if (canClickScoreboard[8]) {
    document.getElementById("Full-house").onclick = holdScoresFullHouse;
  }
  if (canClickScoreboard[9]) {
    document.getElementById("Small-straight").onclick = holdScoresSmallStraight;
  }
  if (canClickScoreboard[10]) {
    document.getElementById("Large-straight").onclick = holdScoresLargeStraight;
  }
  if (canClickScoreboard[11]) {
    document.getElementById("Yahtzee").onclick = holdScoresYahtzee;
  }
  if (canClickScoreboard[12]) {
    document.getElementById("Chance").onclick = holdScoresChance;
  }
}
