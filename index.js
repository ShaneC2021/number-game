
let form = document.getElementById("myForm");
  form.addEventListener("submit",function (event){ 
  event.preventDefault()
});

let counter = 0;
let randomNumber = 0;

function computerChooses() { 
  randomNumber = Math.ceil(Math.random() * 100) +1; //rounds decimal numbers up to nearest integer, max number is 100
  document.getElementById("computer").innerText = 
  "Computer has chosen a number which will be revealed at the end of the game";
}

function compare() { // comparison function
  counter += 1;      // keeps track of guesses
  let userGuess = parseFloat(document.getElementById("guess").value);

  if(( counter <= 3) && (userGuess === randomNumber)) { // if correct number is chosen and guesses are < 3
    alert("You win !!!");                               //User wins
    location.reload();                                  // page reloaded
    return;                                             // exit function
}
  if ((counter === 3) && (userGuess !== randomNumber)) { //if guess===3 and still no correct answer you lose
    alert("Computer's number was  " + randomNumber + " YOU LOSE   womp womp womp  :(");
    location.reload();
    return;                                               //exit function
    
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
