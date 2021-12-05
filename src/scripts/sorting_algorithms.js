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

export { swapper }