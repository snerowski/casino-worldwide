var hitBtn = document.querySelector('#hit')
var standBtn = document.querySelector('#stand')

// attaching imgs to cards
// clubs
var twoC = $("<img>",{src: "../playing-cards-imgs/2_of_clubs.png"})
var threeC = $("<img>",{src: "../playing-cards-imgs/3_of_clubs.png"})
var fourC = $("<img>",{src: "../playing-cards-imgs/4_of_clubs.png"})
var fiveC = $("<img>",{src: "../playing-cards-imgs/5_of_clubs.png"})
var sixC = $("<img>",{src: "../playing-cards-imgs/6_of_clubs.png"})
var sevenC = $("<img>",{src: "../playing-cards-imgs/7_of_clubs.png"})
var eightC = $("<img>",{src: "../playing-cards-imgs/8_of_clubs.png"})
var nineC = $("<img>",{src: "../playing-cards-imgs/9_of_clubs.png"})
var tenC = $("<img>",{src: "../playing-cards-imgs/10_of_clubs.png"})
var jackC = $("<img>",{src: "../playing-cards-imgs/jack_of_clubs2.png"})
var queenC = $("<img>",{src: "../playing-cards-imgs/queen_of_clubs2.png"})
var kingC = $("<img>",{src: "../playing-cards-imgs/king_of_clubs2.png"})
var aceC = $("<img>",{src: "../playing-cards-imgs/ace_of_clubs.png"})

// diamonds
var twoD = $("<img>",{src: "../playing-cards-imgs/2_of_diamonds.png"})
var threeD = $("<img>",{src: "../playing-cards-imgs/3_of_diamonds.png"})
var fourD = $("<img>",{src: "../playing-cards-imgs/4_of_diamonds.png"})
var fiveD = $("<img>",{src: "../playing-cards-imgs/5_of_diamonds.png"})
var sixD = $("<img>",{src: "../playing-cards-imgs/6_of_diamonds.png"})
var sevenD = $("<img>",{src: "../playing-cards-imgs/7_of_diamonds.png"})
var eightD = $("<img>",{src: "../playing-cards-imgs/8_of_diamonds.png"})
var nineD = $("<img>",{src: "../playing-cards-imgs/9_of_diamonds.png"})
var tenD = $("<img>",{src: "../playing-cards-imgs/10_of_diamonds.png"})
var jackD = $("<img>",{src: "../playing-cards-imgs/jack_of_diamonds2.png"})
var queenD = $("<img>",{src: "../playing-cards-imgs/queen_of_diamonds2.png"})
var kingD = $("<img>",{src: "../playing-cards-imgs/king_of_diamonds2.png"})
var aceD = $("<img>",{src: "../playing-cards-imgs/ace_of_diamonds.png"})

// hearts
var twoH = $("<img>",{src: "../playing-cards-imgs/2_of_hearts.png"})
var threeH = $("<img>",{src: "../playing-cards-imgs/3_of_hearts.png"})
var fourH = $("<img>",{src: "../playing-cards-imgs/4_of_hearts.png"})
var fiveH = $("<img>",{src: "../playing-cards-imgs/5_of_hearts.png"})
var sixH = $("<img>",{src: "../playing-cards-imgs/6_of_hearts.png"})
var sevenH = $("<img>",{src: "../playing-cards-imgs/7_of_hearts.png"})
var eightH = $("<img>",{src: "../playing-cards-imgs/8_of_hearts.png"})
var nineH = $("<img>",{src: "../playing-cards-imgs/9_of_hearts.png"})
var tenH = $("<img>",{src: "../playing-cards-imgs/10_of_hearts.png"})
var jackH = $("<img>",{src: "../playing-cards-imgs/jack_of_hearts2.png"})
var queenH = $("<img>",{src: "../playing-cards-imgs/queen_of_hearts2.png"})
var kingH = $("<img>",{src: "../playing-cards-imgs/king_of_hearts2.png"})
var aceH = $("<img>",{src: "../playing-cards-imgs/ace_of_hearts.png"})
// spades
var twoS = $("<img>",{src: "../playing-cards-imgs/2_of_spades.png"})
var threeS = $("<img>",{src: "../playing-cards-imgs/3_of_spades.png"})
var fourS = $("<img>",{src: "../playing-cards-imgs/4_of_spades.png"})
var fiveS = $("<img>",{src: "../playing-cards-imgs/5_of_spades.png"})
var sixS = $("<img>",{src: "../playing-cards-imgs/6_of_spades.png"})
var sevenS = $("<img>",{src: "../playing-cards-imgs/7_of_spades.png"})
var eightS = $("<img>",{src: "../playing-cards-imgs/8_of_spades.png"})
var nineS = $("<img>",{src: "../playing-cards-imgs/9_of_spades.png"})
var tenS = $("<img>",{src: "../playing-cards-imgs/10_of_spades.png"})
var jackS = $("<img>",{src: "../playing-cards-imgs/jack_of_spades2.png"})
var queenS = $("<img>",{src: "../playing-cards-imgs/queen_of_spades2.png"})
var kingS = $("<img>",{src: "../playing-cards-imgs/king_of_spades2.png"})
var aceS = $("<img>",{src: "../playing-cards-imgs/ace_of_spades.png"})


hitBtn.addEventListener("click",function(){
    console.log("i work");
});

standBtn.addEventListener("click",function(){
    console.log("i work too");
});