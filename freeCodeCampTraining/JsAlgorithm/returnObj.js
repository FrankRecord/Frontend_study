const _symbolKey = array => {
    const symbolObj = {}
    array.forEach((item) => {
        symbolObj[Symbol(item)] =item;
    })
    return symbolObj
}
console.log(_symbolKey([1,2]))