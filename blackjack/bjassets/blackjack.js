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
//make the dealer and the user start with two cards? at least make the dealer start with 2 one hidden
// base the dealer choices of hitting on user totalValue that way itll only try to get higher than that 
var dealerValue
var hide

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

window.onload = function() {
    hit();
    hit();
}

function dealCardsToDealer(){
    for(var i = 0; i < 2; i++){
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
    document.getElementById("hide").style.display = "none"
}
window.onload = function(){
    dealCardsToDealer();
    hit();
    hit();
}


function checkBust (){
    if (totalValue > 21){
        var bustMessage = document.createElement("p");
        bustMessage.innerHTML = "Bust!";
        bustMessage.classList.add("bust-message");
        document.getElementById("user-cards").appendChild(bustMessage);
        document.getElementById("hit").setAttribute("disabled", true);
    }
} 

standBtn.addEventListener("click)