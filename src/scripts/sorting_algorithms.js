
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

            // ---- Merge Sort ---- //

//passing graph.selection as bars

async function merge(left, right, graph, selection, speed) {

    let leftBar = graph.select(smallestIdx(left));
    let rightBar = graph.select(smallestIdx(right));

    while (left.size() !== 0 && right.size() !== 0) {


        if (parseInt(leftBar.data()) > parseInt(rightBar.data())) {
            await QSswapper(graph, leftBar, rightBar, speed)
            right = right.filter(function (d, i) { return d > smallestVal(right) });
            if (right.size() > 0) rightBar = graph.select(smallestIdx(right));
        } else {
            left = left.filter(function (d, i) { return d > smallestVal(left) });
            if (left.size() > 0) leftBar = graph.select(smallestIdx(left));
        }

    }
    return selection;
}


async function mergeSort(graph, bars, speed) {
    if (bars.size() <= 1) {
        return bars;
    }
    const mid = Math.floor(bars.size() / 2);
    const left = bars.filter(function (d, i) { return i < mid });
    const right = bars.filter(function (d, i) { return i >= mid });
    return await merge(await mergeSort(graph, left, speed), await mergeSort(graph, right, speed), graph, bars, speed).then(x => {
        return x;
    });
}

function smallestIdx(bars) {
    const idxArr = [];
    bars.each(function (d, i) {
        const bar = (bars.filter(function (d, j) { return i === j }))
        const idx = parseInt(bar.attr("class").slice(9));
        idxArr.push(idx);
    });
    const idx = Math.min(...idxArr);
    return ".bar-" + idx;
}

function smallestVal(bars) {
    const valArr = [];
    bars.each(function (d1, i) {
        const bar = (bars.filter(function (d2, i) { return d1 === d2 }))
        valArr.push(parseInt(bar.data()));
    })
    return Math.min(...valArr);
}


export { swapper, bubbleSort, quickSort, QSswapper, mergeSort }