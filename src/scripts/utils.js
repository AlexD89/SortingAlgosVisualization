
const generateRandomArray = (size, max) => {
    const array = [];
    for (let i = 0; i < size; i++){
        let randomNum = Math.floor(Math.random() * max);
        if (randomNum === 0) randomNum++;
        array.push(randomNum);
    }
    return array;
}

export { generateRandomArray }