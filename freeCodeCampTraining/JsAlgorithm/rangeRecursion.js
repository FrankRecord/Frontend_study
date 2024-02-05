function rangeOfNumbers(startNum, endNum) {
    if(startNum > endNum){
        return []
    }else{
        const rangeArray = rangeOfNumbers(startNum, endNum -1);
        rangeArray.push(endNum);
        return rangeArray;
    }
};

function rangeOfNumbers2(startNum, endNum) {
    return startNum > endNum ? [] : [...rangeOfNumbers2(startNum, endNum-1), endNum]
};

console.log(rangeOfNumbers2(1,5))
