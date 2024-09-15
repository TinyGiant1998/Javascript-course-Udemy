'use strict';

// -------DOM Manipulation---------
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '😁 Correct Number';
// document.querySelector('.number').textContent = 13; 
// document.querySelector('.score').textContent = 11; 
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value); 
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0; 
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message; 
}



document.querySelector('.check').addEventListener('click',
    function () {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);

        //When there is no input
        if (guess < 0 || guess > 20) {
            displayMessage('😭 Please enter a valid number between 0 and 20');
            
            //When player wins
        } else if (guess === secretNumber) {
            document.querySelector('.number').textContent = secretNumber;
            displayMessage('😁 Correct Number');
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';


            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }

            //When guess is differnt/wrong
        } else if(guess !== secretNumber){
            
            if (score > 1) {
                displayMessage(guess > secretNumber ? 'Too High! 😛' : 'Too low! 😛');
              score--;
              document.querySelector('.score').textContent = score;
            } else {
              displayMessage('You lost the game! 😢');
              document.querySelector('.score').textContent = 0;
            }
        }
        
        
         //When guess is high 
        // else if (guess > secretNumber) {

        //     if (score > 1) {
        //         document.querySelector('.message').textContent = 'Too High! 😛';
        //         score--;
        //         document.querySelector('.score').textContent = score;
        //     }

        //     else {
        //         document.querySelector('.message').textContent =
        //             'You lost the game! 😢';
        //         document.querySelector('.score').textContent = 0;
        //     }
        //     //When Guess is low
        // } else if (guess < secretNumber) {
        //     if (score > 1) {
        //         document.querySelector('.message').textContent = 'Too low! 😛';
        //         score--;
        //         document.querySelector('.score').textContent = score;
        //     } else {
        //         document.querySelector('.message').textContent =
        //             'You lost the game! 😢';
        //         document.querySelector('.score').textContent = 0;
        //     }
        // }
    });

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    })

