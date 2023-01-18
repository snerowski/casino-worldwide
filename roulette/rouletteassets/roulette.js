const rouletteWheel = document.getElementById("roulette-wheel");
const spinButton = document.getElementById("spin-button");
const resultsBox = document.getElementById("results-box");
const colorSelector = document.getElementById("color-selector");
const winLose = document.getElementById("win-lose")
const color = document.getElementById("color")
var score = document.querySelector(".score-number")
var startingScore = 100

function updateScore(newScore) {
    startingScore = newScore;
    console.log(startingScore)
    score.textContent = newScore;
    localStorage.setItem("rouletteScore", newScore);
}
const rotationValues = [
    { minDegree: 0, maxDegree: 12, value: 'Green'},
    { minDegree: 13, maxDegree: 24, value: 'Black' },
    { minDegree: 25, maxDegree: 36, value: 'Red' },
    { minDegree: 37, maxDegree: 48, value: 'Black' },
    { minDegree: 49, maxDegree: 60, value: 'Red' },
    { minDegree: 61, maxDegree: 72, value: 'Black' },
    { minDegree: 73, maxDegree: 84, value: 'Red' },
    { minDegree: 85, maxDegree: 96, value: 'Black' },
    { minDegree: 97, maxDegree: 108, value: 'Red' },
    { minDegree: 109, maxDegree: 120, value: 'Black' },
    { minDegree: 121, maxDegree: 132, value: 'Red' },
    { minDegree: 133, maxDegree: 144, value: 'Black' },
    { minDegree: 145, maxDegree: 156, value: 'Red' },
    { minDegree: 157, maxDegree: 168, value: 'Black' },
    { minDegree: 169, maxDegree: 180, value: 'Red' },
    { minDegree: 181, maxDegree: 192, value: 'Black' },
    { minDegree: 193, maxDegree: 204, value: 'Red' },
    { minDegree: 205, maxDegree: 216, value: 'Black'},
    { minDegree: 217, maxDegree: 228, value: 'Red' },
    { minDegree: 229, maxDegree: 240, value: 'Black' },
    { minDegree: 241, maxDegree: 252, value: 'Red' },
    { minDegree: 253, maxDegree: 264, value: 'Black' },
    { minDegree: 265, maxDegree: 276, value: 'Red' },
    { minDegree: 277, maxDegree: 288, value: 'Black' },
    { minDegree: 289, maxDegree: 300, value: 'Red' },
    { minDegree: 301, maxDegree: 312, value: 'Black' },
    { minDegree: 313, maxDegree: 324, value: 'Red' },
    { minDegree: 325, maxDegree: 336, value: 'Black' },
    { minDegree: 337, maxDegree: 348, value: 'Red' },
    { minDegree: 349, maxDegree: 360, value: 'Black' },
    { minDegree: 361, maxDegree: 372, value: 'Red' },
    { minDegree: 373, maxDegree: 384, value: 'Green'}
];

const data = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, ];

var pieColors = [
                 "Red", 
                 "Black", 
                 "Green",
                 "Red",
                 "Black",
                 "Red",
                 "Black",
                 "Red", 
                 "Black",
                 "Red", 
                 "Black",
                 "Red", 
                 "Black",
                 "Red", 
                 "Black",
                 "Red", 
                 "Black",
                 "Green",
                 "Red", 
                 "Black",
                 "Red", 
                 "Black",
                 "Red", 
                 "Black",
                 "Red", 
                 "Black",
                 "Red", 
                 "Black",
                 "Red", 
                 "Black",
                ]
let myChart = new Chart(rouletteWheel, {
    plugins: [ChartDataLabels],
    type: "pie",
    data: {
        labels: [00, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,],
        
        datasets: [
            {
                backgroundColor: pieColors,
                data: data,
            }
        ],
    },
    options: {
        responsive: true,
        Animation: { duration: 0},
        plugins: {
            tooltip: false,
            legend: {
                display: false,
            },
            datalabels: {
                color: "#ffffff",
                formatter: (_,context) =>
                context.chart.data.labels[context.dataIndex],
                font: {size: 10},
            },
        },
    },
    
});               



const valueGenerator = (angleValue) => {
   
    
    for(let i of rotationValues) {
        var temp = i.value
        var userChoice = colorSelector.value
    if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
        console.log(userChoice)
        console.log(temp)
        if (userChoice === temp) {
            winLose.innerHTML = "YOU WIN"
            updateScore(startingScore + 50)
            console.log("YOU WIN")
        } else {
            winLose.innerHTML = "YOU LOSE"
            updateScore(startingScore -20)
            console.log("YOU LOSE")
        }
        color.innerHTML = temp
        
        spinButton.disabled = false;
        break;
        
    }   
  }
};

let count = 0;

let resultValue = 101;


spinButton.addEventListener("click", () =>{
    spinButton.disabled = true;
   

    let randomDegree = Math.floor(Math.random() *
    (355 - 0 + 1) + 0);

    let rotationInterval = window.setInterval(()=>{
    
    
    myChart.options.rotation = myChart.options.rotation + resultValue;
    
    myChart.update();

    if(myChart.options.rotation >=360){
        count += 1;
        resultValue -= 5;
        myChart.options.rotation = 0; 
    }
    else if(count> 15 && myChart.options.rotation == randomDegree) {
        valueGenerator(randomDegree);
        clearInterval(rotationInterval)
        count= 0;
        resultValue = 101;
    }
    
    }, 10);
});

