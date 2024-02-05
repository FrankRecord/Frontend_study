function convertToRoman(num) {
    let apartNum = String(num).split('')
    const numLength = apartNum.length;
    if(numLength === 3){
        apartNum = ['0'].concat(apartNum)
    }else if(numLength === 2){
        apartNum = ['0','0'].concat(apartNum)
    }else if(numLength === 1) {
        apartNum = ['0','0','0'].concat(apartNum)
    }
    return apartNum.map(item => parseInt(item)).reduce((acc,currentValue,currentIndex) => {
        const place = 4 -currentIndex
        return acc + getRomanNum(place, currentValue)
    }, '')
}

function getRomanNum(place,num){
    const greatNumObj = {
        1: 'I',
        5: 'V',
        10: 'X',
        50: 'L',
        100: 'C',
        500: 'D',
        1000: 'M'
    }
    let romanNum = ''
    if(place === 4){
        romanNum = num !== 0 ?greatNumObj[1000].repeat(num) : ''
    }else if (place === 3){
        if(num > 8){
            romanNum =  greatNumObj[100].repeat(10 - num) + greatNumObj[1000]
        }else if(8 >=  num && num >= 5){
            romanNum = greatNumObj[500] + greatNumObj[100].repeat(num - 5)
        }else if(5 >  num && num > 3){
            romanNum = greatNumObj[100].repeat(5 - num ) + greatNumObj[500]
        }else {
            romanNum = num !==0 ? greatNumObj[100].repeat(num) : ''
        }
    }else if (place === 2){
        if(num > 8){
            romanNum = greatNumObj[10].repeat(10 - num) + greatNumObj[100]
        }else if(8 >=  num && num >= 5){
            romanNum = greatNumObj[50] + greatNumObj[10].repeat(num - 5)
        }else if(5 >  num && num > 3){
            romanNum = greatNumObj[10].repeat(5 - num) + greatNumObj[50]
        }else {
            romanNum = num !== 0 ? greatNumObj[10].repeat(num) : ''
        }
    }else {
        if(num > 8){
            romanNum = greatNumObj[1].repeat(10 - num) + greatNumObj[10]
        }else if(8 >= num && num >= 5){
            romanNum = greatNumObj[5] + greatNumObj[1].repeat(num - 5)
        }else if(5 > num && num > 3){
            romanNum = greatNumObj[1].repeat(5 - num) + greatNumObj[5]
        }else {
            romanNum = num !==0 ? greatNumObj[1].repeat(num) : ''
        }
    }
    return romanNum
}

console.log(convertToRoman(1000))