
var dealer;
var player;
var score = document.querySelector(".score-number")
var startingScore = 100
var winLose = document.querySelector(".wl")
var playerImg = document.querySelector(".player-card-img img");
var emptyImg = document.querySelector(".player-card-img")
var drawCard = document.querySelector(".draw")
var higher = document.querySelector(".higher")
var lower = document.querySelector(".lower")
score.textContent = startingScore;
higher.disabled = true;
lower.disabled = true;

// function to update score in local storage
function updateScore(newScore) {
    startingScore = newScore;
    score.textContent = newScore;
    localStorage.setItem("playerScore", newScore);
}

// function to clear
function clear() {
    emptyImg.innerHTML = ""
    winLose.textContent = ""
}

// function to compare higher value
function compareHigh() {
    var dealerValue = 0
    var playerValue = 0
    switch (dealer.value) {
        case "2":
            dealerValue = 2;
            break;
        case "3":
            dealerValue = 3;
            break;
        case "4":
            dealerValue = 4;
            break;
        case "5":
            dealerValue = 5;
            break;
        case "6":
            dealerValue = 6;
            break;
        case "7":
            dealerValue = 7;
            break;
        case "8":
            dealerValue = 8;
            break;
        case "9":
            dealerValue = 9;
            break;
        case "10":
            dealerValue = 10;
            break;
        case "JACK":
            dealerValue = 11;
            break;
        case "QUEEN":
            dealerValue = 12;
            break;
        case "KING":
            dealerValue = 13
            break;
        case "ACE":
            dealerValue = 14
            break;
    }
    switch (player.value) {
        case "2":
            playerValue = 2;
            break;
        case "3":
            playerValue = 3;
            break;
        case "4":
            playerValue = 4;
            break;
        case "5":
            playerValue = 5;
            break;
        case "6":
            playerValue = 6;
            break;
        case "7":
            playerValue = 7;
            break;
        case "8":
            playerValue = 8;
            break;
        case "9":
            playerValue = 9;
            break;
        case "10":
            playerValue = 10;
            break;
        case "JACK":
            playerValue = 11;
            break;
        case "QUEEN":
            playerValue = 12;
            break;
        case "KING":
            playerValue = 13
            break;
        case "ACE":
            playerValue = 14
            break;
    }

    if (playerValue > dealerValue) {
        winLose.textContent = "WINNER!!!"
        updateScore(startingScore + 10)
    } else if (playerValue < dealerValue) {
        winLose.textContent = "YOU LOSE :("
        updateScore(startingScore - 10)
    } else {
        winLose.textContent = "TIE GAME"
    }
}

// function to compare lower value
function compareLow() {
    var dealerValue = 0
    var playerValue = 0
    switch (dealer.value) {
        case "2":
            dealerValue = 2;
            break;
        case "3":
            dealerValue = 3;
            break;
        case "4":
            dealerValue = 4;
            break;
        case "5":
            dealerValue = 5;
            break;
        case "6":
            dealerValue = 6;
            break;
        case "7":
            dealerValue = 7;
            break;
        case "8":
            dealerValue = 8;
            break;
        case "9":
            dealerValue = 9;
            break;
        case "10":
            dealerValue = 10;
            break;
        case "JACK":
            dealerValue = 11;
            break;
        case "QUEEN":
            dealerValue = 12;
            break;
        case "KING":
            dealerValue = 13
            break;
        case "ACE":
            dealerValue = 14
            break;
    }
    switch (player.value) {
        case "2":
            playerValue = 2;
            break;
        case "3":
            playerValue = 3;
            break;
        case "4":
            playerValue = 4;
            break;
        case "5":
            playerValue = 5;
            break;
        case "6":
            playerValue = 6;
            break;
        case "7":
            playerValue = 7;
            break;
        case "8":
            playerValue = 8;
            break;
        case "9":
            playerValue = 9;
            break;
        case "10":
            playerValue = 10;
            break;
        case "JACK":
            playerValue = 11;
            break;
        case "QUEEN":
            playerValue = 12;
            break;
        case "KING":
            playerValue = 13
            break;
        case "ACE":
            playerValue = 14
            break;
    }
    if (playerValue > dealerValue) {
        winLose.textContent = "YOU LOSE :("
        updateScore(startingScore - 10)
    } else if (playerValue < dealerValue) {
        winLose.textContent = "WINNER!!!"
        updateScore(startingScore + 10)
    } else {
        winLose.textContent = "TIE GAME"
    }
}

// event listener to draw new card for the dealer
drawCard.addEventListener("click", function () {
    drawCard.disabled = true;
    // variable to store the new img in the empty div
    var currentImg = document.querySelector(".card-img img");
    // removes current image
    if (currentImg) {
        currentImg.remove();
    }
    clear()
    // delaying the card from appearing

    // api link
    fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
        // taking api data converting to json
        .then(function (response) {
            return response.json();
        })
        // storing json in data param
        .then(function (data) {
            console.log(data)
            // storing card from json in global var
            dealer = data.cards[0];
            // creating new img to add to div
            var cardImg = document.createElement("img");
            // setting new img to img from card var
            cardImg.src = dealer.image;
            // adding new img to div
            document.querySelector(".card-img").appendChild(cardImg);
        });

    higher.disabled = false;
    lower.disabled = false;
});

// event listener for clicking higher btn
higher.addEventListener("click", function () {
    higher.disabled = true
    playerImg = document.querySelector(".player-card-img img");
    if (playerImg) {
        playerImg.remove();
    }

    fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            player = data.cards[0];
            var cardImg = document.createElement("img");
            cardImg.src = player.image;
            document.querySelector(".player-card-img").appendChild(cardImg);
            compareHigh()
            // console.log(data)
        });
    drawCard.disabled = false
    lower.disabled = true
});

// event listener for clicking lower btn
lower.addEventListener("click", function () {
    lower.disabled = true
    playerImg = document.querySelector(".player-card-img img");
    if (playerImg) {
        playerImg.remove();
    }

    fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            player = data.cards[0];
            var cardImg = document.createElement("img");
            cardImg.src = player.image;
            document.querySelector(".player-card-img").appendChild(cardImg);
            compareLow()

            drawCard.disabled = false
            higher.disabled = true
        }, 100)
});




