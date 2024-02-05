function devFinishDay(developTime){
    const requireFinishArray = [];
    const n = developTime.length;
    for(let i = 0; i < n; i++){
        const finishTime = recursionOfFinishTime(i, developTime)
        requireFinishArray.push(finishTime)
    }
    return requireFinishArray
}

function recursionOfFinishTime(n, developTime){
    if(n<0){
        return 0;
    }else{
        return recursionOfFinishTime(n-1, developTime) + developTime[n];
    }
}

function projectDeployDay(developTime, testTime){
    const devFinishTime = devFinishDay(developTime);
    const projectDeployTime = [];
    for(let i =0; i <developTime.length;i++){
        const finishTime = devFinishTime[i] + testTime[i]
        projectDeployTime.push(finishTime)
    }
    console.log(projectDeployTime)
    return Math.max(...projectDeployTime)
}


const developTime = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], testTime = [12,13,14,15,6,7,8,9,5,6,7,8,8,9,10]
console.log(projectDeployDay(
    developTime, testTime
))