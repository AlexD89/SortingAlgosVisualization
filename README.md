# Sorting Algorithms Visualization

Web app demonstrates how different sorting algorithms perform sorting.
Given an array of nums of different lengths and types (ascending, descending, or
random) user can choose an algorithm(e.g. mergeSort, bubbleSort, quickSort)
and see a visual of the sorting process for a given algorithm.
In addition, this app will allow showing two algorithms side by side to show the difference between two different algorithms.

# Technologies, Libraries, APIs

This project is implemented with the following technologies:
* The D3 API to render graphs and perfom transitions
* Java Script
* CSS
* Webpack and Babel to bundle and transpile the source JavaScript code
* npm to manage project dependencies

# Functionality

In SAV project, users will be able to:
* Choose a type  and a size of the graph to be sorted
* Choose a type of sorting algorithm for given graphs
* Choose a speed of sorting simulation

# Code snippets

* The graphs are rendered with the help of D3 library and svg

```js
const graph1 = d3.select("#graph1").append("svg")
    .attr("height", height)
    .attr("width", width)
    .attr("style", "border: 1px solid black");

const graph2 = d3.select("#graph2").append("svg")
            .attr("height", height)
            .attr("width", width)
            .attr("style", "border: 1px solid black");
```

* Array to sort are generated with "generateRandomArray" function and then passed
    as data to "renderGraph" , which render new graph to the page

```js 

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

```

* Animation is produced by swapper functions which return promises in order to chain 
    transitions asyncronous

```js
function swapper(bar1, bar2, speed) {

    const barOneTransition = bar1.transition()
        .duration(speed)
        .attr("x", `${bar2.attr("x")}`)
        .end();


    const barTwoTransition = bar2.transition()
        .duration(speed)
        .attr("x", `${bar1.attr("x")}`)
        .end();

    const tempIdx = bar1.attr('class');
    bar1.attr('class', bar2.attr('class'));
    bar2.attr('class', tempIdx);

    return Promise.all([barOneTransition, barTwoTransition]);
}
```
```js
    function QSswapper(graph, bar1, bar2, speed) {
    const bar1Idx = parseInt(bar1.attr("class").slice(9));
    const bar2Idx = parseInt(bar2.attr("class").slice(9));

    const promise = bar2.transition()
        .duration(speed)
        .attr("x", bar1.attr("x"))
        .end();

    bar2.attr("class", bar1.attr("class"));

    for (let i = bar1Idx; i < bar2Idx; i++) {
        const bar = graph.select(".bar-" + i);
        bar.transition()
            .duration(speed)
            .attr("x", parseInt(bar.attr("x")) + parseFloat(bar.attr("width")) + 1)
            .attr("class", `bars bar-${parseInt(i) + 1}`);

    }
    return promise;
}
```

```js

```