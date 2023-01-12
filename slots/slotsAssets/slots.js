var spinAlouance;
var numbersSpun;
var timesWon;

var result;

var slotHandleEl = document.getElementById("slotHandle");

// var slotArray = [
//     apple: ,
//     strawberry: ,
//     banana: ,
//     watermelon: ,
//     cherry: 
// ];

function spin(){
    
    var resultOfspin = {
        firstSlot: Math.floor(Math.random()*5),  
        secondSlot: Math.floor(Math.random()*5),
        thirdSlot: Math.floor(Math.random()*5),
    }
    return resultOfspin;
}

slotHandleEl.addEventListener("click", function(){
    result = spin();
    console.log(result);
    if(result.firstSlot === result.secondSlot && result.firstSlot === result.thirdSlot){
        window.alert("You win");
    }
});


