function smallestCommons(arr) {
    const [min,max] = arr.sort((a,b) => a - b);
    const range = Array(max - min + 1)
        .fill(0)
        .map((_, index) => {
            return index + min
        })
    const upperNum = range.reduce((acc,num) => acc*num)
    for(let i=max; i <= upperNum; i += max){
        const divisible = range.every(item => i % item === 0)
        if(divisible){
            return i;
        }
    }
}

console.log(smallestCommons([1,5]))