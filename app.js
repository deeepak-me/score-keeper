const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const winningScoreSelect = document.querySelector('#playto');


let p1Scores = 0;
let p2Scores = 0;
let winningScore = 5;
let isGameOver = false;

p1Button.addEventListener('click', function() {

    if (!isGameOver) {
        p1Scores += 1;
        if (p1Scores === winningScore) {
            isGameOver = true;
        }
        p1Display.textContent = p1Scores;

    }

})
p2Button.addEventListener('click', function() {

    if (!isGameOver) {
        p2Scores += 1;
        if (p2Scores === winningScore) {
            isGameOver = true;
        }
        p2Display.textContent = p2Scores;

    }

})

winningScoreSelect.addEventListener('change', function() {

})


resetButton.addEventListener('click', function() {
    isGameOver = false;
    p1Scores = 0;
    p2Scores = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
})