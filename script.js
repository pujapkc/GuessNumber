let randomNumber = parseInt(Math.random()*100 +1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')

const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const loworHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevguess = []
let numGuess = 1

let playGame  = true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        validateGuess(guess);
    })
}

function validateGuess(guess){
   if(isNaN(guess)){
    alert('Please enter a valid number');
   }
   else if(guess<1 || guess > 100){
    alert('number is not in the range between 1 to 100');
   }
   else{
    prevguess.push(guess)
    if(numGuess === 11){
        displayGuess(guess)
        displayMessage(`Game Over ! The random number was ${randomNumber}`)
        endGame();
    }
    else{
        displayGuess(guess);
        checkGuess(guess);
    }
   }
}

function checkGuess(guess){
   if(guess === randomNumber){
    displayMessage('You guessed it right');
   }
   else if(guess < randomNumber ){
    displayMessage('Entered number is too low');
   }
   else{
    displayMessage('Entered number is too high');
   }
}

function displayGuess(guess){
     userInput.value = ''
     guessSlot.innerHTML += `${guess}, `;
     numGuess++;
     remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message){
    loworHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML  = `<h2 id = "newGame" >Start New Game</h2>`
    startOver.appendChild(p);
    playGame = false;
    newGame();
}


function newGame(){
   const newGameButton = document.querySelector('#newGame');
   newGameButton.addEventListener('click', function(e){
          randomNumber = parseInt(Math.random()*100 +1);
          prevguess = [];
          numGuess = 1;
          guessSlot.innerHTML = ''
          remaining.innerHTML = `${11 - numGuess}  `;
          userInput.removeAttribute('disabled');
          startOver.removeChild(p);
          playGame = true;
   });
}

