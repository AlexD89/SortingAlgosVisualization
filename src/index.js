import * as utils from "./scripts/utils.js";


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


    async function swapper(bar1,bar2){

        const barOneTransition = bar1.transition()
            .delay(1000)
            .duration(2000)
            .attr("x", `${bar2.attr("x")}`)
            .end();
            
            
        const barTwoTransition = bar2.transition()
            .delay(1000)
            .duration(2000)
            .attr("x", `${bar1.attr("x")}`)
            .end();

        const tempIdx = bar1.attr('class');
        bar1.attr('class', bar2.attr('class'));
        bar2.attr('class', tempIdx);

        return Promise.all([barOneTransition, barTwoTransition]);
    }

    // swapper(bar1,bar2).then(() => swapper(bar1,bar2))
    async function parse(){
        for (let i = 0; i < data.length-1; i++){
            const currentBar = graph1.select(`.bar-${i}`);
            const nextBar = graph1.select(`.bar-${i+1}`);
            console.log(currentBar);
            console.log(nextBar);
            await swapper(currentBar, nextBar);
        }
        // await swapper(bar1,bar2);
        // swapper(bar3,bar4);
    }

    parse();

});