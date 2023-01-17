var deckValues = {
    "ACE": 14,
    "KING": 13,
    "QUEEN": 12,
    "JACK": 11,
    "10": 10,
    "9": 9,
    "8": 8,
    "7": 7,
    "6": 6,
    "5": 5,
    "4": 4,
    "3": 3,
    "2": 2
}

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


function newGame() {
    emptyImg.innerHTML = ""
    winLose.textContent = ""
}
function compareHigh() {

    if (player.value > dealer.value) {
        winLose.textContent = "WINNER!!!"
        startingScore = startingScore + 10;
        score.textContent = startingScore;
    } else if (player.value < dealer.value) {
        winLose.textContent = "YOU LOSE :("
        startingScore = startingScore - 10;
        score.textContent = startingScore;
    } else {
        winLose.textContent = "TIE GAME BUDDY"
    }
}

function compareLow() {

    if (player.value > dealer.value) {
        winLose.textContent = "YOU LOSE :("
        startingScore = startingScore - 10;
        score.textContent = startingScore;
    } else if (player.value < dealer.value) {
        winLose.textContent = "WINNER!!!"
        startingScore = startingScore + 10;
        score.textContent = startingScore;
    } else {
        winLose.textContent = "TIE GAME BUD"
    }
}

// event listener to draw new card for the dealer
drawCard.addEventListener("click", function () {

    // variable to store the new img in the empty div
    var currentImg = document.querySelector(".card-img img");
    // removes current image
    if (currentImg) {
        currentImg.remove();
    }
    newGame()
    // delaying the card from appearing
    setTimeout(function () {
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
    }, 100)

});


higher.addEventListener("click", function () {
    playerImg = document.querySelector(".player-card-img img");
    if (playerImg) {
        playerImg.remove();
    }
    setTimeout(function () {
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
    }, 100)



});


lower.addEventListener("click", function () {
    playerImg = document.querySelector(".player-card-img img");
    if (playerImg) {
        playerImg.remove();
    }
    setTimeout(function () {
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
            });

    }, 100)
});



