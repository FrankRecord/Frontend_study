function checkCashRegister(price, cash, cid) {
    let change = cash - price;
    let response = {
        status: '',
        change: []
    }

    const totalCash = cid.reduce((acc, cashList) =>{
         acc += parseFloat(cashList[1].toFixed(2))
        return acc
    }, 0)

    if(totalCash < change){
        response.status = 'INSUFFICIENT_FUNDS'
        return response
    }else if(totalCash === change){
        response.status = 'CLOSED'
        response.change = cid
        return  response
    }
    const faceValue = [100,20,10,5,1,0.25,0.1,0.05,0.01]
    const cidWithFaceValue = cid.reverse().map((item,index) => {
        return item.concat(faceValue[index])
    });

    const [responseChange, restMoney] = getExchange(change, cidWithFaceValue)

    if(restMoney !== 0){
        response.status = 'INSUFFICIENT_FUNDS'
        return response
    }else {
        response.status = 'OPEN'
        response.change = responseChange
        return response
    }
}

function getExchange(restMoney, cidFaceValue){
    let changeProcess = cidFaceValue.reduce((acc,item) => {
        console.log(acc)
        const faveValueLiteral = item[0]
        const faceValue = item[2]
        const cashInDraw = item[1]
        const [moneyFromCurrentFaceValue, change] = maxOfMoney(cashInDraw, faceValue, restMoney)
        if(moneyFromCurrentFaceValue !== 0){
            restMoney = change
            acc.push([faveValueLiteral, moneyFromCurrentFaceValue, change])
        }
        return acc
    },[])
    const changeResponse = changeProcess.map(item => [item[0], item[1]])
    // to get the rest money need to exchange after give the change of the minimum face value
    const restChange = changeProcess[changeProcess.length -1][2]

    return [changeResponse, restChange]
}

function maxOfMoney(cash, faceValue, changeAmount){
    let calRes = []
    if(cash === 0){
        calRes = [0,changeAmount]
    }else if(changeAmount === 0){
        calRes = [0,changeAmount]
    }else if( faceValue <= changeAmount ){
        const getMoneyFromCash = Math.floor(changeAmount / faceValue) * faceValue
        calRes = cash <= changeAmount ? [cash, parseFloat((changeAmount - cash).toFixed(2))] :[getMoneyFromCash, parseFloat((changeAmount - getMoneyFromCash).toFixed(2))]
    }else if( faceValue > changeAmount){
        calRes = [0,changeAmount]
    }
    return calRes
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))