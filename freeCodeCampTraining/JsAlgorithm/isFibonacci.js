const _isFibonacci = array => {
    // 补全代码
    if(array.length < 4){
        return false
    }
    for(let i=2; i < array.length-2; i++ ){
        if(array[i+2] !== array[i] + array[i+1]){
            return false
        }
    }
    return true
}