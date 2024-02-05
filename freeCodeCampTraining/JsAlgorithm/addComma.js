function _comma(number) {
    // 补全代码
    //convert to array
    let sign = ''
    number = String(number)
    if(number < 0){
        sign = "-"
        number = number.slice(1);
    }
    if(number<1000){
        return sign + number
    }
    const numArray = number.split("").map((num) => {
        return Number(num);
    })
    let index = 0
    const counter = parseInt(numArray.length/3);
    for(let i=0; i<counter; i++){
        index = i + (i+1)*3;
        numArray.splice(-index, 0, ',')
    }
    return sign + numArray.join("")

}
console.log(_comma(1234567))