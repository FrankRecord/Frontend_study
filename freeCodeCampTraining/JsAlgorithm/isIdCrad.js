 // 填写JavaScript
    const _isCard = number => {
        let pattern = /^\d{17,18}[X]?/g
        return pattern.test(number)
    }
console.log(_isCard("2106231998090788X"))