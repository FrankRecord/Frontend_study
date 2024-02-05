let count = 0
const _proxy = object => {
// 补全代码
    return new Proxy(object, {
        get(target, prop, receiver) {
            if (prop in target) {
                count++
            } else {
                count--
            }
        }
    });
}