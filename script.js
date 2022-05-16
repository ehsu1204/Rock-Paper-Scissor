let array = ["rock", "paper", "scissor"];
let game_track = [0, 0];
let button = document.querySelector("#class");

function computerPlay() {
  //randomly selects an option from the array at the top
  return array[Math.floor(Math.random() * array.length)];
}

function playerSelection() {
  let input = prompt("Pick your selection"); //asks for player input

  let check_word = check_input(input); //first make sure its valid
  while (check_word === false) {
    // if not valid, then it will promt to enter again. This exists if and only if check_word becomes true
    input = prompt("pick something that is valid");
    input = input.toLowerCase();
    check_word = check_input(input);
  }
  return input;
}

function playRound() {
  let r = "rock";
  let p = "paper";
  let s = "scissor";
  let player = playerSelection(); //choice for player
  let computer = computerPlay().toLowerCase(); //choice for computer

  if (
    (player === r && computer === p) ||
    (player === s && computer === r) ||
    (player === p && computer === s)
  ) {
    return "lose";
  } else if (player === computer) {
    return "tie";
  } else {
    return "win";
  }
}

function game() {
  // plays 5 rounds
  let results = [0, 0];
  for (i = 0; i < 5; i++) {
    //loop for 5 rounds
    let x = playRound(); // store as a variable for each round
    let y = console.log(x);
    if (x === "lose") {
      results[1] += 1;
    } else if (x === "tie") {
      results[0] = results[0];
      results[1] = results[1];
    } else {
      results[0] += 1;
    }
  }

  return check_array(results);
}

function check_input(word) {
  // to make sure its actually valid by checking to see if it's in the array at the top of the page
  let new_word = word.toLowerCase();
  if (array.includes(new_word) === false) {
    return false;
  } else {
    return true;
  }
}

function check_array(array) {
  // to show the score needed
  if (array[0] > array[1]) {
    return `YOU WON with a score of ${array[0]} - ${array[1]}`;
  } else if (array[0] === array[1]) {
    return `YOU TIED with a score of ${array[0]} - ${array[1]}`;
  } else {
    return `YOU LOSE with a score of ${array[0]} - ${array[1]}`;
  }
}

button.addEventListener("click", () => {
  // listens for button
  console.log(game());
});
