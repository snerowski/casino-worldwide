// assings variables to card imgs and gives them values
var cards = [
    {src: "../playing-cards-imgs/2_of_clubs.png", value: 2},
    {src: "../playing-cards-imgs/3_of_clubs.png", value: 3},
    {src: "../playing-cards-imgs/4_of_clubs.png", value: 4},
    {src: "../playing-cards-imgs/5_of_clubs.png", value: 5},
    {src: "../playing-cards-imgs/6_of_clubs.png", value: 6},
    {src: "../playing-cards-imgs/7_of_clubs.png", value: 7},
    {src: "../playing-cards-imgs/8_of_clubs.png", value: 8},
    {src: "../playing-cards-imgs/9_of_clubs.png", value: 9},
    {src: "../playing-cards-imgs/10_of_clubs.png", value: 10},
    {src: "../playing-cards-imgs/jack_of_clubs2.png", value: 10},
    {src: "../playing-cards-imgs/queen_of_clubs2.png", value: 10},
    {src: "../playing-cards-imgs/king_of_clubs2.png", value: 10},
    {src: "../playing-cards-imgs/ace_of_clubs.png", value: 11},
    {src: "../playing-cards-imgs/2_of_diamonds.png", value: 2},
    {src: "../playing-cards-imgs/3_of_diamonds.png", value: 3},
    {src: "../playing-cards-imgs/4_of_diamonds.png", value: 4},
    {src: "../playing-cards-imgs/5_of_diamonds.png", value: 5},
    {src: "../playing-cards-imgs/6_of_diamonds.png", value: 6},
    {src: "../playing-cards-imgs/7_of_diamonds.png", value: 7},
    {src: "../playing-cards-imgs/8_of_diamonds.png", value: 8},
    {src: "../playing-cards-imgs/9_of_diamonds.png", value: 9},
    {src: "../playing-cards-imgs/10_of_diamonds.png", value: 10},
    {src: "../playing-cards-imgs/jack_of_diamonds2.png", value: 10},
    {src: "../playing-cards-imgs/queen_of_diamonds2.png", value: 10},
    {src: "../playing-cards-imgs/king_of_diamonds2.png", value: 10},
    {src: "../playing-cards-imgs/ace_of_diamonds.png", value: 11},
    {src: "../playing-cards-imgs/2_of_hearts.png", value: 2},
    {src: "../playing-cards-imgs/3_of_hearts.png", value: 3},
    {src: "../playing-cards-imgs/4_of_hearts.png", value: 4},
    {src: "../playing-cards-imgs/5_of_hearts.png", value: 5},
    {src: "../playing-cards-imgs/6_of_hearts.png", value: 6},
    {src: "../playing-cards-imgs/7_of_hearts.png", value: 7},
    {src: "../playing-cards-imgs/8_of_hearts.png", value: 8},
    {src: "../playing-cards-imgs/9_of_hearts.png", value: 9},
    {src: "../playing-cards-imgs/10_of_hearts.png", value: 10},
    {src: "../playing-cards-imgs/jack_of_hearts2.png", value: 10},
    {src: "../playing-cards-imgs/queen_of_hearts2.png", value: 10},
    {src: "../playing-cards-imgs/king_of_hearts2.png", value: 10},
    {src: "../playing-cards-imgs/ace_of_hearts.png", value: 11},
    {src: "../playing-cards-imgs/2_of_spades.png", value: 2},
    {src: "../playing-cards-imgs/3_of_spades.png", value: 3},
    {src: "../playing-cards-imgs/4_of_spades.png", value: 4},
    {src: "../playing-cards-imgs/5_of_spades.png", value: 5},
    {src: "../playing-cards-imgs/6_of_spades.png", value: 6},
    {src: "../playing-cards-imgs/7_of_spades.png", value: 7},
    {src: "../playing-cards-imgs/8_of_spades.png", value: 8},
    {src: "../playing-cards-imgs/9_of_spades.png", value: 9},
    {src: "../playing-cards-imgs/10_of_spades.png", value: 10},
    {src: "../playing-cards-imgs/jack_of_spades2.png", value: 10},
    {src: "../playing-cards-imgs/queen_of_spades2.png", value: 10},
    {src: "../playing-cards-imgs/king_of_spades2.png", value: 10},
    {src: "../playing-cards-imgs/ace_of_spades.png", value: 11},
  ];

var usedCards = [];
var hitbtn = document.querySelector('#hit');
var standBtn = document.querySelector('#stand');
var totalValue = 0;
var dealerValue = 0;
var bjWins
var bjLosses
var bjTies
//make the dealer and the user start with two cards? at least make the dealer start with 2 one hidden
// base the dealer choices of hitting on user totalValue that way itll only try to get higher than that 



// maybe add button that refreshes the page?
function hit() {
    if(totalValue <= 21) {
        var randomCard = cards[Math.floor(Math.random()*cards.length)];
        while(usedCards.indexOf(randomCard) !== -1){
            cards[Math.floor(Math.random()*cards.length)];
        }
        usedCards.push(randomCard);
        var img = document.createElement("img");
        img.src = randomCard.src;
        document.getElementById("user-cards").appendChild(img);
        totalValue += randomCard.value;
        document.getElementById("your-sum").innerHTML = totalValue;
        checkBust();
    }
}
document.getElementById("hit").addEventListener("click", hit);

function dealCardsToDealer(){
    for(var i = 0; i < 1; i++){
        var randomCard = cards[Math.floor(Math.random()*cards.length)];
        while(usedCards.indexOf(randomCard)!== -1){
            cards[Math.floor(Math.random()*cards.length)];
        }

        usedCards.push(randomCard);
        var img = document.createElement("img");
        img.src = randomCard.src;
        document.getElementById("dealer-cards").appendChild(img);
        dealerValue += randomCard.value;    
        document.getElementById("dealer-sum").innerHTML = dealerValue;
    }
}
window.onload = function(){
    dealCardsToDealer();
    hit();
    hit();
    var nothing
    nothing = localStorage.getItem("bjScores");
    if(localStorage.getItem("bjScores")){
        var scoreStorage = JSON.parse(localStorage.getItem("bjScores"));
        console.log(scoreStorage)
        bjWins = scoreStorage.wins;
        bjLosses = scoreStorage.Losses;
        bjTies = scoreStorage.ties;

}else{
        bjWins = 0;
        bjLosses= 0;
        bjTies= 0;
    
}}


function checkBust (){
    if (totalValue > 21){
        var bustMessage = document.createElement("h2");
        bustMessage.innerHTML = "Bust!";
        bustMessage.classList.add("bust-message");
        document.getElementById("user-cards").appendChild(bustMessage);
        document.getElementById("hit").setAttribute("disabled", true);
    }
} 
function dealerHit() {
    while (dealerValue < totalValue) {
        var randomCard = cards[Math.floor(Math.random() * cards.length)];
        while (usedCards.indexOf(randomCard) !== -1) {
            cards[Math.floor(Math.random() * cards.length)];
        }
        usedCards.push(randomCard);
        var img = document.createElement("img");
        img.src = randomCard.src;
        document.getElementById("dealer-cards").appendChild(img);
        dealerValue += randomCard.value;
        document.getElementById("dealer-sum").innerHTML = dealerValue;
    }
}

var hiddenDealerCard = document.getElementById("dealer-cards").firstElementChild;
hiddenDealerCard.classList.add("hidden");

standBtn.addEventListener("click",function(){
    // hiddenDealerCard.classList.remove("hidden")
    if(totalValue === 21){
        var winMessage = document.createElement("h2");
        winMessage.innerHTML = "YOU WON!";
        winMessage.classList.add("win-message");
        document.getElementById("user-cards").appendChild(winMessage);
        addWin()
    }else {
        dealerHit();

    }
    if(dealerValue > 21 ) {
        var dealerMessageLost = document.createElement("h2");
        dealerMessageLost.innerHTML = "YOU WON Dealer busted!";
        dealerMessageLost.classList.add ("win-message");
        document.getElementById("user-cards").appendChild(dealerMessageLost);
        addWin();
    } 
    if (dealerValue === 21) {
        var dealearWonMessage = document.createElement("h2");
        dealearWonMessage.innerHTML = "DEALER WON SORRY TRY AGAIN";
        dealearWonMessage.classList.add("loss-message");
        document.getElementById("user-cards").appendChild(dealearWonMessage);
        addLoss();
    } if (dealerValue === totalValue) {
        var tieMessage = document.createElement("h2");
        tieMessage.innerHTML = "ITS A TIE!";
        tieMessage.classList.add("tie-message");
        document.getElementById("user-cards").appendChild(tieMessage);
        addTie();
    } if (dealerValue > totalValue && dealerValue < 21) {
        var dealearWonMessage = document.createElement("h2");
        dealearWonMessage.innerHTML = "DEALER WON SORRY TRY AGAIN";
        dealearWonMessage.classList.add("loss-message");
        document.getElementById("user-cards").appendChild(dealearWonMessage);
        addLoss();
        
        
    }
    var bjStats = {
        wins:bjWins,
        Losses:bjLosses,
        ties:bjTies,
    }
    localStorage.setItem("bjScores", JSON.stringify(bjStats))
})

// local storage add to index.html when done 



function addWin(){
    if(bjWins == null){
        bjWins = 1
    }else {
        bjWins++;
    };
    // console.log(bjStats.bjWins)
}
function addLoss (){
if(bjLosses == null) {
    bjLosses = 1
}else {
    bjLosses++;
};
}
function addTie(){
    if(bjTies == null) {
        bjTies = 1
    }else {
        bjTies++;
    };
}




// youtube api stuff down here 
var API_KEY = "AIzaSyBG3vALD8b7OdOuaeCTFdeyGC-PiRoXlsk"
var VIDEO_ID = "xjqTIzYkGdI"


fetch('https://www.googleapis.com/youtube/v3/videos?id=$xjqTIzYkGdI&key=AIzaSyBG3vALD8b7OdOuaeCTFdeyGC-PiRoXlsk&part=snippet')
.then(response => response.json())
.then(data => {
    document.getElementById('video').src = `https://www.youtube.com/embed/${VIDEO_ID}`;
});