'use strict';

// Get UI Elements 
const message = document.querySelector('.message')
const checkBtn = document.querySelector('.check')
const scoreSpan = document.querySelector('.score')
const numberBox = document.querySelector('.number')
const againButton = document.querySelector('.again')
const body = document.querySelector('body')
let guessInput = document.querySelector('.guess')
const highScoreSpan = document.querySelector('.highscore')



let score = 5
let highScore = 0

const randomNumber = Math.trunc(Math.random() * 5) + 1


//  Event Listerner 
againButton.addEventListener('click', () => {
    body.style.backgroundColor = '#222'
    numberBox.style.width = '15rem'
    message.textContent = 'Start guessing...'
    numberBox.textContent = '?'
    score = 20
    scoreSpan.textContent = score
    guessInput.disabled = false
    guessInput.style.borderColor = '#eee'
    checkBtn.disabled = false

})
checkBtn.addEventListener('click', () => {
    let guess = parseInt(guessInput.value)



    if (!guess) {
        message.textContent = 'No Number ⛔'
    } else if (guess === randomNumber) {
        message.textContent = 'Correct 🎉'
        numberBox.textContent = randomNumber
        body.style.backgroundColor = '#60b347'
        numberBox.style.width = '35rem'
        guessInput.disabled = true
        guessInput.disabled = true
        if (score > highScore) {
            highScore = score
            highScoreSpan.innerText = highScore
        }

    } else if (guess > randomNumber) {
        message.textContent = 'Too High 📈'
        score--
        scoreSpan.textContent = score
    } else if (guess < randomNumber) {
        message.textContent = 'Too Low 📉'
        score--
        scoreSpan.textContent = score
    }


    if (score === 0) {
        message.textContent = 'Game Over 🎲'
        guessInput.disabled = true
        guessInput.style.borderColor = 'red'
        checkBtn.disabled = true
    }


})


