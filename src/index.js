document.addEventListener("DOMContentLoaded", () => {
    const data = [4, 7, 2, 33, 22, 11, 19, 3, 6,
                     7, 2, 33, 22, 11, 19, 3, 6,
                     7, 2, 33, 22, 11, 19, 3, 6];

    const svg = d3.select("#graph1").append("svg")
                .attr("height","300px")
                .attr("width","500px");

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

    function swapper(bar1,bar2){
        bar1.transition()
            .duration(2000)
            .attr("x", `${bar2.attr("x")}`);

        bar2.transition()
            .duration(2000)
            .attr("x", `${bar1.attr("x")}`);
    }


    for (let i = 2; i < data.length-1; i++){
        let tempIdx svg.select;
        currentBar = svg.select(`.bar-${i}`);
        nextBar = svg.select(`.bar-${i+1}`);
    }
    swapper(bar1,bar3);

  
});