function whatIsInAName(collection, source) {
    const sourceKey = Object.keys(source)
    return collection.filter( obj => {
            return sourceKey.every(key => {
                return obj[key] === source[key]
            })
        }
    )
}

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }))