function translatePigLatin(str) {
    const pattern = /^[^aeiou]+/
    const resConsonant = str.toLowerCase().match(pattern)
    return resConsonant !== null
        ? str.replace(pattern, '') + resConsonant + 'ay'
        : str + 'way'
}

console.log(translatePigLatin("california"))