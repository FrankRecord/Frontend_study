function palindrome(str) {
    str = str.replace(/\W|_/g, '').toLowerCase()
    const reverseStr = str.split('').reverse().join('')
    return str === reverseStr
}

console.log(palindrome("A man, a plan, a canal. Panama"))