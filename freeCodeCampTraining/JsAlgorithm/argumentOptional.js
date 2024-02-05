function addTogether(){
    const [first, second] = arguments;
    function sendFunc(y){
        return first + y
    }
    if(arguments.length === 1){
        return typeof first == 'number'? sendFunc : undefined
    }
    if(arguments.length === 2){
        return typeof first == 'number' && typeof second == 'number' ? sendFunc(second) : undefined
    }
}