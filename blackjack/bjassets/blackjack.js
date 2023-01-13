var hitBtn = document.querySelector('#hit')
var standBtn = document.querySelector('#stand')

var twoC = {
    src: "../playing-cards-imgs/2_of_clubs.png",
    value: 2
  };
  var threeC = {
    src: "../playing-cards-imgs/3_of_clubs.png",
    value: 3
  };
  var fourC = {
    src: "../playing-cards-imgs/4_of_clubs.png",
    value: 4
  };
  var fiveC = {
    src: "../playing-cards-imgs/5_of_clubs.png",
    value: 5
  };
  var sixC = {
    src: "../playing-cards-imgs/6_of_clubs.png",
    value: 6
  };
  var sevenC = {
    src: "../playing-cards-imgs/7_of_clubs.png",
    value: 7
  };
  var eightC = {
    src: "../playing-cards-imgs/8_of_clubs.png",
    value: 8
  };
  var nineC = {
    src: "../playing-cards-imgs/9_of_clubs.png",
    value: 9
  };
  var tenC = {
    src: "../playing-cards-imgs/10_of_clubs.png",
    value: 10
  };
  var jackC = {
    src: "../playing-cards-imgs/jack_of_clubs.png",
    value: 10
  };
  var queenC = {
    src: "../playing-cards-imgs/queen_of_clubs.png",
    value: 10
  };
  var kingC = {
    src: "../playing-cards-imgs/king_of_clubs.png",
    value: 10
  };
  var aceC = {
    src: "../playing-cards-imgs/ace_of_clubs.png",
    value: 11
  };
  
  var twoD = {
    src: "../playing-cards-imgs/2_of_diamonds.png",
    value: 2
  };
  var threeD = {
    src: "../playing-cards-imgs/3_of_diamonds.png",
    value: 3
  };
  var fourD = {
    src: "../playing-cards-imgs/4_of_diamonds.png",
    value: 4
  };
  var fiveD = {
    src: "../playing-cards-imgs/5_of_diamonds.png",
    value: 5
  };
  var sixD = {
    src: "../playing-cards-imgs/6_of_diamonds.png",
    value: 6
  };
  var sevenD = {
    src: "../playing-cards-imgs/7_of_diamonds.png",
    value: 7
  };
  var eightD = {
    src: "../playing-cards-imgs/8_of_diamonds.png",
    value: 8
  };
  var nineD = {
    src: "../playing-cards-imgs/9_of_diamonds.png",
    value: 9
  };
  var tenD = {
    src: "../playing-cards-imgs/10_of_diamonds.png",
    value: 10
  };
  var jackD = {
    src: "../playing-cards-imgs/jack_of_diamonds.png",
    value: 10
  };
  var queenD = {
    src: "../playing-cards-imgs/queen_of_diamonds.png",
    value: 10
  };
  var kingD = {
    src: "../playing-cards-imgs/king_of_diamonds.png",
    value: 10
  };
  var aceD = {
    src: "../playing-cards-imgs/ace_of_diamonds.png",
    value: 11
  };
  
  var twoH = {
    src: "../playing-cards-imgs/2_of_hearts.png",
    value: 2
  };
  var threeH = {
    src: "../playing-cards-imgs/3_of_hearts.png",
    value: 3
  };
  var fourH = {
    src: "../playing-cards-imgs/4_of_hearts.png",
    value: 4
  };
  var fiveH = {
    src: "../playing-cards-imgs/5_of_hearts.png",
    value: 5
  };
  var sixH = {
    src: "../playing-cards-imgs/6_of_hearts.png",
    value: 6
  };
  var sevenH = {
    src: "../playing-cards-imgs/7_of_hearts.png",
    value: 7
  };
  var eightH = {
    src: "../playing-cards-imgs/8_of_hearts.png",
    value: 8
  };
  var nineH = {
    src: "../playing-cards-imgs/9_of_hearts.png",
    value: 9
  };
  var tenH = {
    src: "../playing-cards-imgs/10_of_hearts.png",
    value: 10
  };
  var jackH = {
    src: "../playing-cards-imgs/jack_of_hearts.png",
    value: 10
  };
  var queenH = {
    src: "../playing-cards-imgs/queen_of_hearts.png",
    value: 10
  };
  var kingH = {
    src: "../playing-cards-imgs/king_of_hearts.png",
    value: 10
  };
  var aceH = {
    src: "../playing-cards-imgs/ace_of_hearts.png",
    value: 11
  };
  
  var twoS = {
    src: "../playing-cards-imgs/2_of_spades.png",
    value: 2
  };
  var threeS = {
    src: "../playing-cards-imgs/3_of_spades.png",
    value: 3
  };
  var fourS = {
    src: "../playing-cards-imgs/4_of_spades.png",
    value: 4
  };
  var fiveS = {
    src: "../playing-cards-imgs/5_of_spades.png",
    value: 5
  };
  var sixS = {
    src: "../playing-cards-imgs/6_of_spades.png",
    value: 6
  };
  var sevenS = {
    src: "../playing-cards-imgs/7_of_spades.png",
    value: 7
  };
  var eightS = {
    src: "../playing-cards-imgs/8_of_spades.png",
    value: 8
  };
  var nineS = {
    src: "../playing-cards-imgs/9_of_spades.png",
    value: 9
  };
  var tenS = {
    src: "../playing-cards-imgs/10_of_spades.png",
    value: 10
  };
  var jackS = {
    src: "../playing-cards-imgs/jack_of_spades.png",
    value: 10
  };
  var queenS = {
    src: "../playing-cards-imgs/queen_of_spades.png",
    value: 10
  };
  var kingS = {
    src: "../playing-cards-imgs/king_of_spades.png",
    value: 10
  };
  var aceS = {
    src: "../playing-cards-imgs/ace_of_spades.png",
    value: 11
  };
// console.log(aceS)

var cardArray = [
    twoC,
    threeC, 
    fourC,
    fiveC,
    sixC,
    sevenC,
    eightC, 
    nineC, 
    tenC, 
    jackC, 
    queenC, 
    kingC, 
    aceC,
    twoD,
    threeD, 
    fourD,
    fiveD,
    sixD,
    sevenD,
    eightD, 
    nineD, 
    tenD, 
    jackD, 
    queenD, 
    kingD, 
    aceD,
    twoH,
    threeH, 
    fourH,
    fiveH,
    sixH,
    sevenH,
    eightH, 
    nineH, 
    tenH, 
    jackH, 
    queenH, 
    kingH, 
    aceH,
    twoS,
    threeS, 
    fourS,
    fiveS,
    sixS,
    sevenS,
    eightS, 
    nineS, 
    tenS, 
    jackS, 
    queenS, 
    kingS, 
    aceS,
];


hitBtn.addEventListener("click",function(){
    console.log("i work");
});

standBtn.addEventListener("click",function(){
    console.log("i work too");
});