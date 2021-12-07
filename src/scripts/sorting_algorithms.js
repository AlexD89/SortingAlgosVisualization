
            // ---- Bubble Sort ----//

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

            // ---- Quick Sort ---- //

function QSswapper(graph, bar1, bar2, speed) {
    // !!! A bad way to get index. Has to be Fixed !!!
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

async function quickSort(graph, speed, data, start = 0, end = -1) {
    if (end === -1) end = data.length;
    if (end - start <= 1) {
        return;
    }
    const pivot = graph.select(`.bar-${start}`);
    for (let i = start + 1; i < end; i++) {
        const currentBar = graph.select(".bar-" + i);
        if (parseInt(pivot.data()) > parseInt(currentBar.data())) {
            await QSswapper(graph, pivot, currentBar, speed);
        }
    }
    const left = graph.selectAll('rect').filter(function (d) { return d < pivot.data() });
    let pivotIdx = parseInt(pivot.attr("class").slice(9));
    const endIdx = pivotIdx + (end - pivotIdx);

    await quickSort(graph, speed, data, start, pivotIdx);
    await quickSort(graph, speed, data, pivotIdx + 1, endIdx);
}

export { swapper, bubbleSort, quickSort, QSswapper }