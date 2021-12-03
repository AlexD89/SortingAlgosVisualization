document.addEventListener("DOMContentLoaded", () => {
    const data = [4, 7, 2, 33, 22, 11, 19, 3, 6,
                     7, 2, 33, 22, 11, 19, 3, 6,
                     7, 2, 33, 22, 11, 19, 3, 6];

    const svg = d3.select("#graph1").append("svg")
                .attr("height","300px")
                .attr("width","500px");

    svg.selectAll("rect")
        .data(data)
        .enter().append("rect")
            .attr("color","red")
            .attr("height", function(d,i){return (d*10)})
            .attr("width", function(){return 500/data.length - 1})
            .attr("x",function(d,i) {return (i * (500 / data.length))})
            .attr("y", function(d, i ){return 300 - (d * 10)});

});