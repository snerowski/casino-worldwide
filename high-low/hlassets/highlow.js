var suits = ["H", "S", "C", "D"]
var rank = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K",]
var deck = []

// nested for loop to combine all the suits to their values
for (var i = 0; i < 4; i++) {
    // console.log(suits[i])
    for (var j = 0; j < 13; j++) {
        // console.log(value[j])
        // console.log(value[j] + suits[i])
        // deck.push(rank[j] + suits[i])
        deck.push({ suit: suits[i], rank: rank[j] });
    }
}
console.log(deck)

function shuffle() {

}


