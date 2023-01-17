var spinAlouance;
var numbersSpun;
var timesWon;

var result;
var slotHandleEl = document.getElementById("slotHandle");
var slotOneEl = document.getElementById("slotOne");
var slotTwoEl = document.getElementById("slotTwo");
var slotThreeEl = document.getElementById("slotThree");
var navDropdownMenu = document.getElementById("dropdownMenuButton");

var slotArray = [
    "banana", "cherry", "apple", "orange", "watermelon"
]

window.onload = function(){
    
    result = spin();
    selectImg(slotArray[result.firstSlot], 1);
    selectImg(slotArray[result.secondSlot], 2);
    selectImg(slotArray[result.thirdSlot], 3);
    if(localStorage.getItem("slotsResults")){
        var storage = JSON.parse(localStorage.getItem("slotsResults"));
        console.log(storage);
        timesWon = storage.wins;
        numbersSpun = storage.spins;
    }
   
}

function spin(){
    
    var resultOfspin = {
        firstSlot: Math.floor(Math.random()*5),  
        secondSlot: Math.floor(Math.random()*5),
        thirdSlot: Math.floor(Math.random()*5),
    }
    return resultOfspin;
}



slotHandleEl.addEventListener("click", function(){
    if (numbersSpun == null) {
        numbersSpun = 1;
    }else{
        numbersSpun++;
    }
    console.log(numbersSpun);
    result = spin();
    
    selectImg(slotArray[result.firstSlot], 1);
    selectImg(slotArray[result.secondSlot], 2);
    selectImg(slotArray[result.thirdSlot], 3);

    console.log();

    if(result.firstSlot === result.secondSlot && result.firstSlot === result.thirdSlot){
        if(timesWon == null){
            timesWon = 1;
        }else{
            timesWon++;
        }
        window.alert("You win");
        console.log(timesWon);
        
    }
    var winRate = {
        spins: numbersSpun,
        wins: timesWon
    }
    localStorage.setItem("slotsResults",JSON.stringify(winRate));
});

function selectImg (input, slot){
    if(slot === 1){
        var selectedSlot = slotOneEl;
    }else if(slot === 2){
        var selectedSlot = slotTwoEl;
    }else{
        var selectedSlot = slotThreeEl;
    }

    if(input === "banana"){
        selectedSlot.setAttribute("src", "./slotsAssets/images/vecteezy_cute-banana-cartoon-icon-illustration_.jpg");
    }else if(input === "cherry"){
        selectedSlot.setAttribute("src", "./slotsAssets/images/vecteezy_cherry-flat-illustration-clean-icon-design-element-on_5748756.jpg");
    }else if(input === "apple"){
        selectedSlot.setAttribute("src", "./slotsAssets/images/Health_(82).jpg");
    }else if(input === "orange"){
        selectedSlot.setAttribute("src", "./slotsAssets/images/orange_062.jpg");
    }else if(input === "watermelon"){
        selectedSlot.setAttribute("src", "./slotsAssets/images/2049_U1RVRElPIFNNIDE5MzUtMDg.jpg");
    }
}
