let  random = parseInt(Math.random()*100+1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrhi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');//for value insert

let prevGuess = [];
let numGuess = 1;

let playGame = true; //allow to play the game

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault(); // values ko khi mt lekr jau roko yhi pr me yha pr hi use krunga or lunga
       const guess = parseInt(userInput.value);
       validateGuess(guess);
    })
}

function validateGuess(guess){
    //give me the guess than i validate it 
    if(isNaN(guess)){
        alert('Please enter a valid number');
    } else if(guess<1){
        alert('Please enter a valid number');
    } else if(guess > 100){
        alert('Please enter a number less than 100');
    } else{
        prevGuess.push(guess);
        if(numGuess === 11){
            display_guess(guess);
            displayMessage(`Game Over. Random Number was ${random}`);
            endGame();
        } else{
            display_guess(guess);
            checkGuess(guess);
        }
    }

}

function checkGuess(guess){
    //check the number that is eqaul or high or less than random 
    if(guess === randomNumber){
        displayMessage(`You guestedit right`);
        endGame();
    } else if(guess < randomNumber){
        displayMessage(`Number is TOOO low`);
    } else if(guess > randomNumber){
        displayMessage(`Number is TOOO high`);
    }
}

function display_guess(guess){
        userInput.value = '';
        guessSlot.innerHTML += `${guess}   ` ;//push the guess value 
        numGuess++;
        remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
    //
    lowOrhi.innerHTML = `<h2>${message}</h2>`;
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
        random = parseInt(Math.random()*100+1);
        prevGuess =[];
       
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
         playGame = true;
    });
//
}

function endGame(){
    userInput.value = ''; //cleane the value 
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

