function steamrollArray(arr) {
    let tempList = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])){
            tempList = tempList.concat(steamrollArray(arr[i]))
        } else {
            tempList = tempList.concat(arr[i])
        }
    }
    return tempList
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));