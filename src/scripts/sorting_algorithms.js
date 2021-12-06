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


async function bubbleSort(graph, speed, data) {
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < data.length - 1; i++) {
            let currentBar = graph.select(`.bar-${i}`);
            let nextBar = graph.select(`.bar-${i + 1}`);
            if (data[i] > data[i + 1]) {
                [data[i], data[i + 1]] = [data[i + 1], data[i]];
                sorted = false;
                await swapper(currentBar, nextBar, speed);
            }
        }
    }
}

export { swapper, bubbleSort }