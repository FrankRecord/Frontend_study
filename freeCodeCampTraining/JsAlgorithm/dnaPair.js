function pairElement(str) {
    const capsule = []
    const dnaHalf = str.split('')
    return dnaHalf.reduce((acc, item) => {
        return item === "G"
            ? acc.concat(['G','C'])
            : acc.concat(['C', 'G'])
    },capsule)
}
console.log(pairElement("GCG"))
