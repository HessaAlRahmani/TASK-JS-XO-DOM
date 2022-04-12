// ❗️ DON'T TOUCH THESE 2 FUNCTIONs
// Pre-made function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
function fillButton(index, text) {
  // This function fills the button of the send index
  document.getElementById(index).innerHTML = text;
}
// pre-made a function. You can use this function to present an alert to say someone wins
function winningAlert(winner) {
  if (confirm(`Horraaay, ${winner} wins!`)) {
    // The code here will be exectued if you press on OK button that will pop on the window
    restartGame();
  }
}

// SAMPLE CODE: This code fills the 1st and 9th button with X and O initially
// ❗️ Delete this code once you are done testing
// fillButton(1, "X");
// fillButton(9, "O");

/**
 *
 * THE MAIN FUNCTION
 * This function gets executed every time the user clicks the button
 * Add your code here, since this is going to be your main function
 * That interacts with the UI
 */
var currentPlayer = 0;
let player;

function clickButton(index) {
  console.log(`Button number ${index} is clicked`);
  // Your main code here.

  //let the button be clicked (alternate players one at a time)
  if (currentPlayer % 2 == 0) {
    fillButton(index, "X");
    player = "X";
    document.getElementById(index).classList.add("green");
  } else if (currentPlayer % 2 == 1) {
    fillButton(index, "O");
    player = "O";
    document.getElementById(index).classList.add("red");
    checkWinner(player);
  }
  document.getElementById(index).disabled = true;
  checkWinner(player);
  currentPlayer++;
  //call fill button
  //disable the button
  //check if there's a winner
}

/**
 * (Optional) It's always a good idea to make a function for every single purpose.
 */
function checkWinner(player) {
  if (
    document.getElementById(1).innerHTML ==
      document.getElementById(2).innerHTML &&
    document.getElementById(2).innerHTML ==
      document.getElementById(3).innerHTML &&
    document.getElementById(3).innerHTML == player
  ) {
    winningAlert(player);
  } else if (
    document.getElementById(4).innerHTML ==
      document.getElementById(5).innerHTML &&
    document.getElementById(5).innerHTML ==
      document.getElementById(6).innerHTML &&
    document.getElementById(6).innerHTML == player
  ) {
    winningAlert(player);
  } else if (
    document.getElementById(7).innerHTML ==
      document.getElementById(8).innerHTML &&
    document.getElementById(8).innerHTML ==
      document.getElementById(9).innerHTML &&
    document.getElementById(9).innerHTML == player
  ) {
    winningAlert(player);
  } else if (
    document.getElementById(1).innerHTML ==
      document.getElementById(4).innerHTML &&
    document.getElementById(4).innerHTML ==
      document.getElementById(7).innerHTML &&
    document.getElementById(7).innerHTML == player
  ) {
    winningAlert(player);
  } else if (
    document.getElementById(2).innerHTML ==
      document.getElementById(5).innerHTML &&
    document.getElementById(5).innerHTML ==
      document.getElementById(8).innerHTML &&
    document.getElementById(8).innerHTML == player
  ) {
    winningAlert(player);
  } else if (
    document.getElementById(3).innerHTML ==
      document.getElementById(6).innerHTML &&
    document.getElementById(6).innerHTML ==
      document.getElementById(9).innerHTML &&
    document.getElementById(9).innerHTML == player
  ) {
    winningAlert(player);
  } else if (
    document.getElementById(1).innerHTML ==
      document.getElementById(5).innerHTML &&
    document.getElementById(5).innerHTML ==
      document.getElementById(9).innerHTML &&
    document.getElementById(9).innerHTML == player
  ) {
    winningAlert(player);
  } else if (
    document.getElementById(3).innerHTML ==
      document.getElementById(5).innerHTML &&
    document.getElementById(5).innerHTML ==
      document.getElementById(7).innerHTML &&
    document.getElementById(7).innerHTML == player
  ) {
    winningAlert(player);
  }
}
//  check if winning cases are true
//  call winning alert
function restartGame() {
  for (let i = 1; i < 10; i++) {
    fillButton(i, "");
    document.getElementById(i).disabled = false;
  }
}
