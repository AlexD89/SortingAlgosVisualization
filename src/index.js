import * as utils from "./scripts/utils.js";
import * as algos from "./scripts/sorting_algorithms.js"
import { drag } from "d3-drag";


document.addEventListener("DOMContentLoaded", () => {

    const data = utils.generateRandomArray(25,45);

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

    
    // const sizeOfArr = document.getElementsByName("array-size");
    // console.log(sizeOfArr);
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
        const data = utils.generateRandomArray(arraySize,30);
        if (arrayType.value === "asc") data.sort((a,b) => (a-b));
        if (arrayType.value === "desc") data.sort((a, b) => (a - b)).reverse();

        d3.selectAll("svg > *").remove();
        utils.renderGraph(graph1,data);
        utils.renderGraph(graph2,data);
    })

    const bar1 = graph1.select(".bar-1");
    const bar2 = graph1.select(".bar-2");
    const bar3 = graph1.select(".bar-3");
    const bar4 = graph1.select(".bar-4");

    let speed = 100;

    async function parse(graph, speed){
        for (let i = 0; i < data.length-1; i++){
            const currentBar = graph.select(`.bar-${i}`);
            const nextBar = graph.select(`.bar-${i+1}`);
            await algos.swapper(currentBar, nextBar, speed);
        }
    }

    async function bubbleSort(graph, speed){
        let sorted = false;
        while (!sorted){
            sorted = true;
            for (let i = 0; i < data.length-1; i++){
                let currentBar = graph.select(`.bar-${i}`);
                let nextBar = graph.select(`.bar-${i + 1}`);
                if(data[i] > data[i+1]){
                    [data[i],data[i+1]] = [data[i+1], data[i]];
                    sorted = false;
                    await algos.swapper(currentBar,nextBar,speed);
                }
            }
        }
    }

    // parse(graph1,speed);
    bubbleSort(graph1,speed);

});