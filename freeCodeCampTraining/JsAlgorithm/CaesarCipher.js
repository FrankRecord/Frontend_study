function rot13(str) {
    const aCode = 'A'.charCodeAt(0)
    const zCode = 'Z'.charCodeAt(0)
    return str.split('').reduce((acc, letter, index) => {
        const letterCode = letter.charCodeAt(0)
        let rot13Code =letterCode >= aCode && letterCode <= zCode ? letterCode + 13 : letterCode
        if(rot13Code > zCode){
            rot13Code = aCode + (rot13Code - zCode) - 1
        }
        return  acc + String.fromCharCode(rot13Code)
    },'')}

console.log(rot13("SERR PBQR PNZC"))