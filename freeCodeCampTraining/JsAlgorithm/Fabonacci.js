function sumFibs(num) {
    let currentNum = 1
    let previousNum = 0
    let sum = 0
    while(currentNum<=num){
        if(currentNum%2 !==0){
            sum += currentNum
        }
        currentNum += previousNum
        previousNum = currentNum - previousNum
    }
    return sum;
}

console.log(sumFibs(75025))