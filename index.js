let player = {
    name: "Prince",
    chips: 1000
}
let cards = []
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
const startBtn = document.getElementById("start-btn");
const messageEl = document.getElementById("message-el");
const sumEl = document.getElementById("sum-el");
const cardEl = document.getElementById("card-el");
const cardNew = document.getElementById("new-card");
const playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips;

let message = "";

function randomGame() {
    let randomCard = Math.floor(Math.random() * 13) + 1
    if (randomCard === 1) {
        return 11
    } else if (randomCard > 10) {
        return 10
    }
    return randomCard
}

function startGame(){
    isAlive = true;
    let firstCard = randomGame();
    let secondCard = randomGame();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum;
    cardEl.textContent = "Cards: "

    for(let i = 0; i < cards.length; i++){

        cardEl.textContent += cards[i] + " ";
    }

    if (sum < 21) {
        message = "Do you want a new card?";
    } else if (sum === 21) {
        message = "Congrats! You've got Blackjack";
        hasBlackjack = true;
    } else {
        message = "You are out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

startBtn.onclick = startGame;

cardNew.onclick = function () {
    if (isAlive && !hasBlackjack) {
        let card = randomGame();
        sum += card;
        cards.push(card);
        renderGame();
    } else if (isAlive && hasBlackjack) {
        messageEl.textContent = "You have Blackjack, you do not need more cards!"
    } else{
        messageEl.textContent = "YOU ARE OUT! You can't draw new cards"
    }
};