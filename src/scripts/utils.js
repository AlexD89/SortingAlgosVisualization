
const generateRandomArray = (size, max) => {
    const array = [];
    for (let i = 0; i < size; i++){
        let randomNum = Math.floor(Math.random() * max);
        if (randomNum === 0) randomNum++;
        array.push(randomNum);
    }
    return array;
}

const renderGraph = (svg, data) => {
    svg.selectAll("rect")
        .data(data)
        .enter().append("rect")
        .attr("class", function (d, i) { return `bars bar-${i}` })
        .attr("height", function (d, i) { return (d * 6) })
        .attr("width", function () { return 500 / data.length - 1 })
        .attr("x", function (d, i) { return (i * (500 / data.length)) })
        .attr("y", function (d, i) { return 300 - (d * 6) });
}

export { generateRandomArray, renderGraph }