let cups = [
    { type: 1, price: 100, color: 'black', sales: 3000, name: '牛客logo马克杯' },
    { type: 2, price: 40, color: 'blue', sales: 1000, name: '无盖星空杯' },
    { type: 4, price: 60, color: 'green', sales: 200, name: '老式茶杯' },
    { type: 3, price: 50, color: 'green', sales: 600, name: '欧式印花杯' }
]

cups.sort((a,b) => {
    return a.sales - b.sales
})
console.log(cups)
