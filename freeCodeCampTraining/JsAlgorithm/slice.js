const closure = () => {
    // 补全代码
    let counter = 1;
    return function() {
        console.log(`函数被调用${counter}次`);
        return counter ++
    }
}
let test = closure()
let test2 = closure()
test();
test();
test();
test();
test2();
test2();
test2();
test2();