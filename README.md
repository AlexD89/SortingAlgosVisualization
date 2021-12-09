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

The graphs are rendered with the help of D3 library and svg

```
const graph1 = d3.select("#graph1").append("svg")
    .attr("height", height)
    .attr("width", width)
    .attr("style", "border: 1px solid black");

    const graph2 = d3.select("#graph2").append("svg")
                .attr("height", height)
                .attr("width", width)
                .attr("style", "border: 1px solid black");
```