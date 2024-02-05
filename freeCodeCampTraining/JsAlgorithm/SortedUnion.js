function uniteUnique(...arr) {
    return arr.reduce((acc, item) =>{
        let tempList = [];
        item.forEach(num => {
            if(!tempList.includes(num) && !acc.includes(num)){
                 tempList.push(num)
            }
        })

        return acc.concat(tempList)
    },[])
}

console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]))