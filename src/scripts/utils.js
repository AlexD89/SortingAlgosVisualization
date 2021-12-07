
const generateRandomArray = (size, max) => {
    const array = [];
    while(array.length < size) {
        let randomNum = Math.floor(Math.random() * max);
        if (!array.includes(randomNum) && randomNum > 0){
            array.push(randomNum);
        }
    }
    return array;
}

const renderGraph = (svg, data) => {
    svg.selectAll("rect")
        .data(data)
        .enter().append("rect")
            .attr("class", function (d, i) { return `bars bar-${i}` })
            .attr("height", function (d, i) { return (d * 3) })
            .attr("width", function () { return 500 / data.length - 1 })
            .attr("x", function (d, i) { return (i * (500 / data.length)) })
            .attr("y", function (d, i) { return 300 - (d * 3) });
}

export { generateRandomArray, renderGraph }