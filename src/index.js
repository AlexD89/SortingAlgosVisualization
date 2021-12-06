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
        } else if (sortingAlgo1.value === "quick-sort") {
            quickSort(graph1, speed);
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


    const speed = 100;
    function QSswapper (bar1, bar2, speed){
        // !!! A bad way to get index. Has to be Fixed !!!
        const bar1Idx = parseInt(bar1.attr("class").slice(9));
        const bar2Idx = parseInt(bar2.attr("class").slice(9));

        const promise = bar2.transition()
            // .delay(speed)
            .duration(speed)
            .attr("x",bar1.attr("x"))
            //there is a bug here. Return class bar0 instead of bar-0
            // .attr("class", bar1.attr("class"))
            .end();
        //fix for the bug on line 115
        bar2.attr("class",bar1.attr("class"));

        for (let i=bar1Idx; i < bar2Idx; i++){
            const bar = graph1.select(".bar-" + i);
            bar.transition()
                // .delay(speed)
                .duration(speed)
                // !!! make x dynamic !!!!
                .attr("x", parseInt(bar.attr("x")) + parseInt(bar.attr("width")) + 1)
                .attr("class", `bars bar-${parseInt(i) + 1}`);
 
        }
        return promise;
    }

    async function quickSort(graph, speed, start = 0, end = data.length){
        if(end - start <= 1 ) {
            return;
        }
        const pivot = graph.select(`.bar-${start}`);
        for (let i = start+1; i < end; i++){
            const currentBar = graph.select(".bar-" + i);
            if (parseInt(pivot.data()) > parseInt(currentBar.data())){
                await QSswapper (pivot,currentBar,speed);
            }
        }
        const left = graph.selectAll('rect').filter(function(d){return d < pivot.data()});
        let pivotIdx = parseInt(pivot.attr("class").slice(9));
        const endIdx = pivotIdx + (end-pivotIdx);
        
        await quickSort(graph,speed,start,pivotIdx);
        await quickSort(graph,speed,pivotIdx+1, endIdx );
    }
    // console.log(quickSort);
    // quickSort(graph1,speed);

    // console.log(graph1.selectAll("rect"));
    // const temp = graph1.selectAll("rect").filter(function(d){return d < 20});
    // console.log(temp.filter(function(d,i){return i===3}));

});