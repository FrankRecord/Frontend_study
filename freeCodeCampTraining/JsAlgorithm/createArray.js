const _createArray = (number) => {
    // 补全代码
    return Array(number).fill(number);
}
console.log(_createArray(4))

const array = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, index) {
    const returns = accumulator + currentValue;
    console.log(
        `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
    );
    return returns;
}

array.reduce(reducer);


