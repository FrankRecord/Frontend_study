function fearNotLetter(str) {
    const strList = str.split('')
    let index = 0
    let missingLetter = undefined
    strList.forEach(letter => {
        // 获取当前UTF-16字符的编码序号
        const codeIndexUTF = letter.charCodeAt(0)
        // if the calculate result more than 1，it means there is a missing letter
        if(str.charCodeAt(index + 1) - codeIndexUTF > 1){
            missingLetter = String.fromCharCode(codeIndexUTF + 1)
        }else{
            index++
        }
    })
    return missingLetter
}

console.log(fearNotLetter("abce"));