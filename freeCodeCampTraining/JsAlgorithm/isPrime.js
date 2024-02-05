Number.prototype._isPrime = function(num){
    if(num <= 1){
        return false
    }else{
        let sq = Math.sqrt(num)
        for (let i = 2; i <= sq; i++) {
            if (num%i === 0) {
                return false
            }
        }
        return true
    }
}