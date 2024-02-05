let data = [
    {name: 'nowcoder1'},
    {name: 'nowcoder2'}
]

const _api = string => {
    // 补全代码
    let analyseArr = string.split("?")
    let type = analyseArr[0]
    if(type === "get"){
        return data
    }else if(type === "update"){
        let param = analyseArr[1].split("&")[0].split("=")[0]
        let oldValue = analyseArr[1].split("&")[0].split("=")[1]
        let newValue = analyseArr[1].split("&")[1].split("=")[1]
        data.forEach((item) => {
            if(item.hasOwnProperty(param) && item[param] === oldValue){
                item[param] = newValue;
            }
        })
    }
}
_api("update?check=xxx&to=yyy")
console.log(data)