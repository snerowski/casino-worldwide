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
var hitBtn = document.querySelector('#hit');
var standBtn = document.querySelector('#stand');
var totalValue = 0;
var availableCards = cards.slice();

hitBtn.addEventListener("click",function(){
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
    }
    // console.log("i work");
});

standBtn.addEventListener("click",function(){
    console.log("i work too");
});