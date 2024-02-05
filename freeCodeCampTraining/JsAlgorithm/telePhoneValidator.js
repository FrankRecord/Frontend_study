function telephoneCheck(str) {
    const bracket = /^1? ?\(\d{3}\) ?-?\d{3} ?-?\d{4}/
    const noBracket = /^1? ?\d{3} ?-?\d{3} ?-?\d{4}/

    const removeSymbol = str.replace(/\W/g, '')
    const hasCountryNum = removeSymbol.startsWith('1')
    let lengthRes = true
    if(!hasCountryNum){
        lengthRes = removeSymbol.length === 10;
    }else {
        lengthRes = removeSymbol.length === 11;
    }

    return (bracket.test(str) || noBracket.test(str)) && lengthRes ;
}

console.log(telephoneCheck("555-555-5555"))