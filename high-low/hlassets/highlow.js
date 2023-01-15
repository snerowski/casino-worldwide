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



function compareHigh() {
    if (player.value > dealer.value) {
        console.log("YOU WIN")
    } else if (player.value < dealer.value) {
        console.log("YOU LOSE")
    } else {
        console.log("TIE GAME BITCH")
    }
}

function compareLow() {
    if (player.value > dealer.value) {
        console.log("YOU LOSE")
    } else if (player.value < dealer.value) {
        console.log("YOU WIN")
    } else {
        console.log("TIE GAME BITCH")
    }
}


var dealer;
var player;
var drawCard = document.querySelector(".draw")
var higher = document.querySelector(".higher")
var lower = document.querySelector(".lower")

// event listener to draw new card for the dealer
drawCard.addEventListener("click", function () {
    // variable to store the new img in the empty div
    var currentImg = document.querySelector(".card-img img");
    // removes current image
    if (currentImg) {
        currentImg.remove();
    }
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
                // console.log(data)
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
    var currentImg = document.querySelector(".player-card-img img");
    if (currentImg) {
        currentImg.remove();
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
    var currentImg = document.querySelector(".player-card-img img");
    if (currentImg) {
        currentImg.remove();
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



