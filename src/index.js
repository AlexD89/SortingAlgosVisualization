import * as utils from "./scripts/utils.js";

document.addEventListener("DOMContentLoaded", () => {

    const data = utils.generateRandomArray(10,30);

    const width = "500px";
    const height = "300px";

    const svg = d3.select("#graph1").append("svg")
                .attr("height", height)
                .attr("width", width)
                .attr("style", "border: 1px solid black");

    const bars = svg.selectAll("rect")
        .data(data)
        .enter().append("rect")
            .attr("class", function(d,i){return `bars bar-${i}`})
            .attr("height", function(d,i){return (d*6)})
            .attr("width", function(){return 500/data.length - 1})
            .attr("x",function(d,i) {return (i * (500 / data.length))})
            .attr("y", function(d, i ){return 300 - (d*6)});

    const bar1 = svg.select(".bar-1");
    const bar2 = svg.select(".bar-2");
    const bar3 = svg.select(".bar-3");
    const bar4 = svg.select(".bar-4");

    function swapper(bar1,bar2){
        bar1.transition()
            .duration(2000)
            .attr("x", `${bar2.attr("x")}`)
            
        bar2.transition()
            .duration(2000)
            .attr("x", `${bar1.attr("x")}`)
        // function(d,i)
        // console.log(`b1 x: ${bar1.attr("x")} b2 x: ${bar2.attr("x")}`);     
    }
                
        // let currentBar, nextBar;
        // for (let i = 0; i < data.length-1; i++){
            //     currentBar = svg.select(`.bar-${i}`);
            //     nextBar = svg.select(`.bar-${i+1}`);
            // }
            
            swapper(bar1,bar2);
            swapper(bar3,bar4);

            
});