const rouletteWheel = document.getElementById("roulette-wheel");
const spinButton = document.getElementById("spin-button");
const rotationValues = [
    { minDegree: 0, maxDegree: 12, value: 1 },
    { minDegree: 13, maxDegree: 24, value: 0 },
    { minDegree: 25, maxDegree: 36, value: 30 },
    { minDegree: 37, maxDegree: 48, value: 29 },
    { minDegree: 49, maxDegree: 60, value: 28 },
    { minDegree: 61, maxDegree: 72, value: 27 },
    { minDegree: 73, maxDegree: 84, value: 26 },
    { minDegree: 85, maxDegree: 96, value: 25 },
    { minDegree: 97, maxDegree: 108, value: 24 },
    { minDegree: 109, maxDegree: 120, value: 23 },
    { minDegree: 121, maxDegree: 132, value: 22 },
    { minDegree: 133, maxDegree: 144, value: 21 },
    { minDegree: 145, maxDegree: 156, value: 20 },
    { minDegree: 157, maxDegree: 168, value: 19 },
    { minDegree: 169, maxDegree: 180, value: 18 },
    { minDegree: 181, maxDegree: 192, value: 17 },
    { minDegree: 193, maxDegree: 204, value: 16 },
    { minDegree: 205, maxDegree: 216, value: 15 },
    { minDegree: 217, maxDegree: 228, value: 14 },
    { minDegree: 229, maxDegree: 240, value: 13 },
    { minDegree: 241, maxDegree: 252, value: 12 },
    { minDegree: 253, maxDegree: 264, value: 11 },
    { minDegree: 265, maxDegree: 276, value: 10 },
    { minDegree: 277, maxDegree: 288, value: 9 },
    { minDegree: 289, maxDegree: 300, value: 8 },
    { minDegree: 301, maxDegree: 312, value: 7 },
    { minDegree: 313, maxDegree: 324, value: 6 },
    { minDegree: 325, maxDegree: 336, value: 5 },
    { minDegree: 337, maxDegree: 348, value: 4 },
    { minDegree: 349, maxDegree: 360, value: 3 },
];

const data = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, ];

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
    for(let i of rotationValues){
    if (angleValue >= i.minDegree && angleValue <= i.maxDegree){
        resultValue.innerHTML = `<p>Value: ${i.value}</p>`;
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

