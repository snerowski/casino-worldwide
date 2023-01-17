const rouletteWheel = document.getElementById("roulette-wheel");
const spinButton = document.getElementById("spin-button");
const rotationValues = [
    { minDegree: 0, maxDegree: 9, value: 00 },
    { minDegree: 10, maxDegree: 19, value: 0 },
    { minDegree: 20, maxDegree: 29, value: 1 },
    { minDegree: 30, maxDegree: 39, value: 2 },
    { minDegree: 40, maxDegree: 49, value: 3 },
    { minDegree: 50, maxDegree: 59, value: 4 },
    { minDegree: 60, maxDegree: 69, value: 5 },
    { minDegree: 70, maxDegree: 79, value: 6 },
    { minDegree: 80, maxDegree: 89, value: 7 },
    { minDegree: 90, maxDegree: 99, value: 8 },
    { minDegree: 100, maxDegree: 109, value: 9 },
    { minDegree: 110, maxDegree: 119, value: 10 },
    { minDegree: 120, maxDegree: 129, value: 11 },
    { minDegree: 130, maxDegree: 139, value: 12 },
    { minDegree: 140, maxDegree: 149, value: 13 },
    { minDegree: 150, maxDegree: 159, value: 14 },
    { minDegree: 160, maxDegree: 169, value: 15 },
    { minDegree: 170, maxDegree: 179, value: 16 },
    { minDegree: 180, maxDegree: 189, value: 17 },
    { minDegree: 190, maxDegree: 199, value: 18 },
    { minDegree: 200, maxDegree: 209, value: 19 },
    { minDegree: 210, maxDegree: 219, value: 20 },
    { minDegree: 220, maxDegree: 229, value: 21 },
    { minDegree: 230, maxDegree: 239, value: 22 },
    { minDegree: 240, maxDegree: 249, value: 23 },
    { minDegree: 250, maxDegree: 259, value: 24 },
    { minDegree: 260, maxDegree: 269, value: 25 },
    { minDegree: 270, maxDegree: 279, value: 26 },
    { minDegree: 280, maxDegree: 289, value: 27 },
    { minDegree: 290, maxDegree: 299, value: 28 },
    { minDegree: 300, maxDegree: 309, value: 29 },
    { minDegree: 310, maxDegree: 319, value: 30 },
    { minDegree: 320, maxDegree: 329, value: 31 },
    { minDegree: 330, maxDegree: 339, value: 32 },
    { minDegree: 340, maxDegree: 349, value: 33 },
    { minDegree: 350, maxDegree: 360, value: 34 },
  
];

const data = [9.5, 9.5, 9.5, 9.5, 9.5, 9.5, 9.5, 9.5, 9.5, 9.5, 9.5, 9.5, 9.5, 9.5, 9.5, 9.5, 9.5, 9.5, 9.5, 9.5, 9.5, 9.5, 9.5, 9.5, 9.5, 9.5, 9.5, 9.5, 9.5, 9.5, 9.5, 9.5, 9.5, 9.5, 9.5, 9.5, 9.5, 9.5];

var pieColors = [
                 "#ff0000", 
                 "#000000", 
                 "#008000",
                 "#ff0000",
                 "#000000",
                 "#ff0000",
                 "#000000",
                 "#ff0000", 
                 "#000000",
                 "#ff0000", 
                 "#000000",
                 "#ff0000", 
                 "#000000",
                 "#ff0000", 
                 "#000000",
                 "#ff0000", 
                 "#000000",
                 "#008000",
                 "#ff0000", 
                 "#000000",
                 "#ff0000", 
                 "#000000",
                 "#ff0000", 
                 "#000000",
                 "#ff0000", 
                 "#000000",
                 "#ff0000", 
                 "#000000",
                 "#ff0000", 
                 "#000000",
                 "#ff0000", 
                 "#000000",
                 "#ff0000", 
                 "#000000",
                 "#ff0000", 
                 "#000000",
                 "#ff0000", 
                 "#000000",
                ]
let myChart = new Chart(rouletteWheel, {
    plugins: [ChartDataLabels],
    type: "pie",
    data: {
        labels: [00, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,],
        
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

const resultsBox = (angleValue) => {
    for(let i of rotationValues){
    if (angleValue >= i.minDegree && angleValue <= i.maxDegree){
        finalValue.innerHTML = `<p>Value: ${i.value}</p>`;
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

