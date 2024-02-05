let flattenArr = []
const _flatten = arr => {
    // 补全代码
    arr.forEach((item) => {
        if(Array.isArray(item)){
            _flatten(item)
        }else{
            flattenArr.push(item)
        }
    })
    return JSON.stringify(flattenArr)
}
console.log(_flatten([1, [2, 3, [4, 5]]]))

