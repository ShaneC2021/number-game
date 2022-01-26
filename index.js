
let form = document.getElementById("myForm");
  form.addEventListener("submit",function (event){ 
  event.preventDefault()
});

let counter = 0;
let randomNumber = 0;

function computerChooses() { 
  randomNumber = Math.ceil(Math.random() * 99) + 1; //rounds decimal numbers up to nearest integer, max number is 100
 
}

function compare() { // comparison function
  counter += 1;      // keeps track of guesses
  let userGuess = parseFloat(document.getElementById("guess").value);

  if(( counter <= 3) && (userGuess === randomNumber)) { // if correct number is chosen and guesses are < 3
    alert("You win !!! Hit ok to play again");         // user wins
    document.getElementById("myForm").reset();                                 
    counter = 0 ;
    computerChooses();                                  // new random number is chosen
    return false;                                       // exit function
  }
  if ((counter === 3) && (userGuess !== randomNumber)) { // if guess === 3 and still no correct answer you lose
    alert("Computer's number was  " + randomNumber + " YOU LOSE   womp womp womp  :(  Hit ok to play again");
    counter = 0;
    document.getElementById("myForm").reset();
    computerChooses();                                  // new random number is chosen
    return false;                                       // exit function
  }
  if (userGuess < randomNumber) {
    alert("Aim higher");
    document.getElementById("myForm").reset();
  }

  if(userGuess > randomNumber) {
    alert("Aim lower");
    document.getElementById("myForm").reset();
  }
}
