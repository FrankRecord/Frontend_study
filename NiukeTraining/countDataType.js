const _findMostType = array => {
    // 补全代码
    let countObj ={
        number: 0,
        string: 0,
        object: 0
    }
    let result = []
    array.forEach((item) => {
        if(typeof  item === "number"){
            countObj.number += 1
        }else if(typeof item == "string"){
            countObj.string += 1
        }else if(typeof  item == "object"){
            countObj.object += 1
        }
    })
    let maxList = Object.values(countObj)
    let maxCou = Math.max(...maxList)
    for(let prop in countObj){
        let value = countObj[prop]
        if(value === maxCou){
            result.push(prop)
        }
    }
    result.push(maxCou);
    return result
}

function check() {return JSON.stringify(_findMostType([1,"1",{},{},2,3,4,3,3,"","","","",""])) === '["number","string",6]' || JSON.stringify(_findMostType([1,"1",{},{},2,3,4,3,3,"","","","",""])) === '["string","number",6]' }
console.log(check())