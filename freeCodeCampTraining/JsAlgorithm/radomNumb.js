function randomRange(myMin, myMax) {
    return Math.random() * (myMax - myMin + 1 ) + myMin;
}
console.log(randomRange(9,20))