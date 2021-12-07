import * as utils from "./scripts/utils.js";
import * as algos from "./scripts/sorting_algorithms.js";


document.addEventListener("DOMContentLoaded", () => {

    let data = utils.generateRandomArray(50,55);

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
        let arraySize = document.getElementById("array-size");
        if(arraySize.value === "small") {
            arraySize = 25;
        } else if (arraySize.value === "medium") {
            arraySize = 50;
        } else if (arraySize.value === "large") {
            arraySize = 100;
        }
        
        let arrayType = document.getElementById("array-type");
        
        data = utils.generateRandomArray(arraySize,101);
        if (arrayType.value === "asc") data.sort((a,b) => (a-b));
        if (arrayType.value === "desc") data.sort((a, b) => (a - b)).reverse();
        
        d3.selectAll("svg > *").remove();
        utils.renderGraph(graph1,data);
        utils.renderGraph(graph2,data);
    });
    
    const algoForm = document.getElementById("algo-form");
    algoForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        let speed = document.getElementById("speed");
        if(speed.value === "slow") {
            speed = 200;
        } else if (speed.value === "normal") {
            speed = 100;
        } else if (speed.value === "fast") {
            speed = 10;
        }

        let sortingAlgo1 = document.getElementById("graph1Algo");
        let sortingAlgo2 = document.getElementById("graph2Algo");
        
        // making duplicates of data for 2 graphs, so sort for graph1 
        //doent affect data for graph2
        const data1 = data.slice();
        const data2 = data.slice();

        if(sortingAlgo1.value === "bubble-sort") {
            algos.bubbleSort(graph1,speed,data1);
        } else if (sortingAlgo1.value === "quick-sort") {
            algos.quickSort(graph1, speed, data1);
        }

        if(sortingAlgo2.value === "bubble-sort") {
            algos.bubbleSort(graph2,speed,data2);
        } else if (sortingAlgo2.value === "quick-sort") {
            algos.quickSort(graph2, speed, data2);
        }
        
        //setting main data back to result of both sorts
        data = data1;
        data = data2;
    });


    
  
    
    const bars = graph1.selectAll('rect');
    const mid = Math.floor(bars.size() / 2);
    let left = bars.filter(function(d,i) {return i < mid});
    let right = bars.filter(function(d,i) {return i >= mid});
    
    
    async function merge(graph, left, right, lr){
        let speed = 100;

        let leftBar = graph.select(smallestIdx(left));
        let rightBar = graph.select(smallestIdx(right));

        while (left.size() !== 0 && right.size() !== 0){

            
            if (parseInt(leftBar.data()) > parseInt(rightBar.data())){
                await algos.QSswapper(graph,leftBar, rightBar, speed)
                right = right.filter(function(d,i) {return d > smallestVal(right)});
                if (right.size() > 0) rightBar = graph.select(smallestIdx(right));
            } else {
                left = left.filter(function(d,i) {return d > smallestVal(left)});
                if (left.size() > 0) leftBar = graph.select(smallestIdx(left));
            }
            
        }
        return lr;
    }

    
    async function mergeSort(bars){
        if (bars.size() <= 1){
            return bars;
        }
        const mid = Math.floor(bars.size() / 2);
        let left = bars.filter(function(d,i) {return i < mid});
        let right = bars.filter(function(d,i) {return i >= mid});
        return await merge(graph1, await mergeSort(left), await mergeSort(right), bars).then(x => {   
            return x;
        });
    }
    

    mergeSort(bars);

    function smallestIdx(bars){
        const idxArr = [];
        bars.each(function(d,i){
            const bar = (bars.filter(function(d,j){return i === j}))
            const idx = parseInt(bar.attr("class").slice(9));
            idxArr.push(idx);
        });
        const idx = Math.min(...idxArr);
        return ".bar-" + idx;
    }

    function smallestVal(bars){
        const valArr = [];
        bars.each(function(d1,i){
            const bar = (bars.filter(function(d2,i) { return d1 === d2}))
            valArr.push(parseInt(bar.data()));
        })
        return Math.min(...valArr);
    }

});