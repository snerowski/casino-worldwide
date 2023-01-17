var blackJack = document.getElementById("blackJack");
var bingo = document.getElementById("bingo");
var highLow = document.getElementById("highLow");
var roulette = document.getElementById("roulette");
var slotWinsEl = document.getElementById("slotWins");
var slotSpinsEl = document.getElementById("slotSpins");
var games = [
    "slotsResults", "high-low-score", "rouletteWins", "bingoWins", "blackJackWins"
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
        }else if (element === "rouletteWins"){
            roulette.textContent = "Wins: "+ storage;
        }else if(element === "bingoWins"){
            bingo.textContent === "Wins: " + storage;
        }else if(element === "blackJackWins"){
            blackJack.textContent === "Score: "+ storage
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
