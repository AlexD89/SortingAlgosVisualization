import * as utils from "./scripts/utils.js";
import * as algos from "./scripts/sorting_algorithms.js";


document.addEventListener("DOMContentLoaded", () => {

    let data = utils.generateRandomArray(25,45);

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
        
        data = utils.generateRandomArray(arraySize,45);
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
        }

        if(sortingAlgo2.value === "bubble-sort") {
            algos.bubbleSort(graph2,speed,data2);
        }

        //setting main data back to result of both sorts
        data = data1;
    });

    const bar1 = graph1.select(".bar-1");
    const bar2 = graph1.select(".bar-2");
    const bar3 = graph1.select(".bar-3");
    const bar4 = graph1.select(".bar-4");

    // const bars = graph1.selectAll("rect");
    // console.log(bars.size())
    // for (let i = 0; i < 4; i++){
    //     const bar = graph1.select(".bar-" + i)
    //     bar.transition()
    //         .delay(1000)
    //         .duration(2000)
    //         .attr("x", parseInt(bar.attr("x")) + 20)
    // }
    // graph1.select(".bar-4")
    //     .transition()
    //         .delay(1000)
    //         .duration(2000)
    //         .attr("x",0)

    function QSswapper (bar1, bar2){
        // !!! A bad way to get index. Has to be Fixed !!!
        const bar1Idx = parseInt(bar1.attr("class").slice(9));
        const bar2Idx = parseInt(bar2.attr("class").slice(9));
       
        const promise = bar2.transition()
            .delay(1000)
            .duration(1000)
            .attr("x",bar1.attr("x"))
            .attr("class","bars bar-"+bar1Idx)
            .end();

        for (let i=bar1Idx; i < bar2Idx; i++){
            const bar = graph1.select(".bar-" + i);
            bar.transition()
                .delay(1000)
                .duration(1000)
                .attr("x", parseInt(bar.attr("x")) + 20)
                .attr("class", `bars bar-${parseInt(i) + 1}`);
 
        }
        return promise;
    }

    async function quickSort(){
        let pivot = graph1.select(".bar-0");
        
        for (let i = 1; i < data.length; i++){
            const currentBar = graph1.select(".bar-" + i);
            if (parseInt(pivot.data()) > parseInt(currentBar.data())){
                await QSswapper (pivot,currentBar);
            }
        }
    }

    quickSort();

});