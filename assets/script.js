
var bjWinsEl = document.getElementById("bjWins");
var bjTiesEl = document.getElementById("bjTies");
var bjLossesEl = document.getElementById("bjLosses");
var bingo = document.getElementById("bingo");
var highLow = document.getElementById("highLow");
var roulette = document.getElementById("roulette");
var slotWinsEl = document.getElementById("slotWins");
var slotSpinsEl = document.getElementById("slotSpins");
var games = [
    "slotsResults", "high-low-score", "bjScores", "rouletteScore"
]


// send object as paramater?
// or local storage
window.onload = function(){
    games.forEach(element => {
        var temp = getStorage(element);
        if(temp != null){
        var storage = getStorage(element);
        console.log(storage);
        if(element === "slotsResults"){
            setSlots(storage);
        }else if(element === "high-low-score"){
            highLow.textContent = "Highscore: "+ storage;
        }else if (element === "rouletteScore"){
            roulette.textContent = "Score:"+ storage;
        }else if(element === "bingoWins"){
            bingo.textContent === "Wins: " + storage;
        }else if(element === "bjScores"){
            setBlackJack(storage);
        }
    }
    });

    
}
// checks to see if storage exists, returns LS or null
function getStorage(storageID){
    if(localStorage.getItem(storageID)) {
       return JSON.parse(localStorage.getItem(storageID))
    }else{
        return null
    }
}

function setSlots(slotsStorage){
    slotWins = slotsStorage.wins;
    slotSpins = slotsStorage.spins;
    slotWinsEl.textContent = "Wins: "+slotWins;
    slotSpinsEl.textContent = "Spins: "+slotSpins;
}

function setBlackJack(blackjackStorage){
    bjWins = blackjackStorage.wins;
    bjTies = blackjackStorage.ties;
    bjLosses = blackjackStorage.Losses;
    bjLossesEl.textContent = "Losses: " + bjLosses;
    bjTiesEl.textContent = "Ties: " + bjTies;
    bjWinsEl.textContent = "Wins: " + bjWins;

}
