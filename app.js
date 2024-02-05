const player1Btn = document.querySelector('#player1');
const player2Btn = document.querySelector('#player2');
const score1 = document.querySelector('#score1');
const score2 = document.querySelector('#score2');
const resetBtn = document.querySelector('#reset');
const winScoreSelect = document.querySelector('#playto');
const winnerIs = document.querySelector('#winner');

player1Btn.disabled = true;
player2Btn.disabled = true;

let winScore = 0;
let p1Score = 0;
let p2Score = 0;

winScoreSelect.addEventListener('change', function() {
    winScore = parseInt(this.value);
    if(winScore > 0) {
        player1Btn.disabled = false;
        player2Btn.disabled = false;
    } else {
        player1Btn.disabled = true;
        player2Btn.disabled = true;
    }
});

player1Btn.addEventListener('click', () => {
    p1Score++;
    score1.innerText = p1Score;
    if(p1Score === winScore) {
        winnerIs.innerText = 'Player 1';
        score1.style.color = 'green';
        score2.style.color = 'red';
        player1Btn.disabled = true;
        player2Btn.disabled = true;
    }
});

player2Btn.addEventListener('click', () => {
    p2Score++;
    score2.innerText = p2Score;
    if(p2Score === winScore) {
        winnerIs.innerText = 'Player 2';
        score2.style.color = 'green';
        score1.style.color = 'red';
        player1Btn.disabled = true;
        player2Btn.disabled = true;
    }  
});

resetBtn.addEventListener('click', reset);

function reset() {
    p1Score = 0;
    p2Score = 0;
    score1.innerText = p1Score;
    score2.innerText = p2Score;
    score1.style.color = 'black';
    score2.style.color = 'black';
    player1Btn.disabled = true;
    player2Btn.disabled = true;
    winScoreSelect.value = 0;
    winScore = 0;
    winnerIs.innerText = 'TBD';
}