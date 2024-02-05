
function getProjectMinTime(developTime, testTime){
    const n = testTime.length;
    let collection = [];
    for(let i=0;i<n;i++){
        collection.push([developTime[i], testTime[i]])
    }
    collection.sort((a,b) =>{
        return b[1] - a[1]
    })
    let developIndex = 0;
    let finishDays = 0;
    collection.forEach((a) => {
        const develop = a[0];
        const test = a[1];
        finishDays = developIndex + develop + test;
        developIndex += develop;
    })
    return finishDays;
}

// const developTime = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], testTime = [12,13,14,15,6,7,8,9,5,6,7,8,8,9,10]
const developTime =[12,13,14,15,6,7,8,9,5,6,7,8,8,9,10] , testTime = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
console.log(getProjectMinTime(developTime, testTime))
