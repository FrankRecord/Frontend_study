function myReplace(str, before, after) {
    const patternCase = /^[a-z]/
    const lowerCaseRes = before.match(patternCase)
    return lowerCaseRes == null
        ? str.replace(before, after[0].toUpperCase().concat(after.substring(1)))
        : str.replace(before, after[0].toLowerCase().concat(after.substring(1)))
}

console.log(myReplace("I think we should look up there", "up", "Down"));