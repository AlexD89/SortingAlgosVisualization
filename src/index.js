import * as utils from "./scripts/utils.js";
import * as algos from "./scripts/sorting_algorithms.js";


document.addEventListener("DOMContentLoaded", () => {
    
    let data = utils.generateRandomArray(25,101);
    let speed = 100;
    let arraySize = 25;
    let active = false;

    

    const width = "500px";
    const height = "300px";
    
    
    const graph1 = d3.select("#graph1").append("svg")
    .attr("height", height)
    .attr("width", width)
    .attr("style", "border: 1px solid black");

    const graph2 = d3.select("#graph2").append("svg")
                .attr("height", height)
                .attr("width", width)
                .attr("style", "border: 1px solid black");

    utils.renderGraph(graph1, data);
    utils.renderGraph(graph2, data);

    const arrayForm = document.getElementById("controls-form");
    arrayForm.addEventListener("submit", (e)=> {
        e.preventDefault();
        let sizeButton = document.getElementById("array-size");
        if (sizeButton.value === "small") {
            arraySize = 25;
        } else if (sizeButton.value === "medium") {
            arraySize = 50;
        } else if (sizeButton.value === "large") {
            arraySize = 100;
        }
        
        let arrayType = document.getElementById("array-type");
        
        data = utils.generateRandomArray(arraySize,101);
        if (arrayType.value === "asc") {
            data.sort((a, b) => (a - b));
            for (let i = 0; i < 5; i++) {
                data.unshift(data.pop());
            }
        }
        if (arrayType.value === "desc") data.sort((a, b) => (a - b)).reverse();
        
    
        d3.selectAll('rect').interrupt().transition().end().then(() => {
            d3.selectAll("svg > *").remove();
            utils.renderGraph(graph1, data);
            utils.renderGraph(graph2, data);
        });
        active = false;
    });
    
    const algoForm = document.getElementById("algo-form");
    
    
    algoForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (active === false){
        
            let speedButton = document.getElementById("speed");
            if (speedButton.value === "slow") {
                speed = 200;
            } else if (speedButton.value === "normal") {
                speed = 100;
            } else if (speedButton.value === "fast") {
                speed = 20;
            }

            let sortingAlgo1 = document.getElementById("graph1Algo");
            let sortingAlgo2 = document.getElementById("graph2Algo");
            
            // making duplicates of data for 2 graphs, so sort for graph1 
            //doent affect data for graph2
            const data1 = data.slice();
            const data2 = data.slice();

            if(sortingAlgo1.value === "bubble-sort") {
                active = true;
                algos.bubbleSort(graph1,speed,data1);
            } else if (sortingAlgo1.value === "quick-sort") {
                active = true;
                algos.quickSort(graph1, speed, data1);
            } else if (sortingAlgo1.value === "merge-sort") {
                active = true;
                algos.mergeSort(graph1, graph1.selectAll('rect'), speed);
            }
            
            if(sortingAlgo2.value === "bubble-sort") {
                active = true;
                algos.bubbleSort(graph2,speed,data2);
            } else if (sortingAlgo2.value === "quick-sort") {
                active = true;
                algos.quickSort(graph2, speed, data2);
                active = true;
            } else if (sortingAlgo2.value === "merge-sort") {
                algos.mergeSort(graph2, graph2.selectAll('rect'), speed);
            }
        }
       
    });



    const stopButton = document.querySelector("#stop");
    stopButton.addEventListener('click',()=>{
        d3.selectAll('rect').interrupt().transition().end().then(() => {
            d3.selectAll("svg > *").remove();
            utils.renderGraph(graph1, data);
            utils.renderGraph(graph2, data);
        }).catch(err => {});
        active = false;
    })

    const infoButton = document.querySelector('.info-btn');
    const aboutContainer = document.querySelector(".about");

    infoButton.addEventListener("click", (e) => {
        e.preventDefault();
        aboutContainer.toggleAttribute("hidden")
    });

    const closeInfo = document.querySelector(".about button");

    closeInfo.addEventListener("click", (e) => {
        e.preventDefault();
        aboutContainer.toggleAttribute("hidden");
    })

});