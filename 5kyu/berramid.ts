// 1. your referral bonus, and
// 2. the price of a beer can

// 1 (1*1), 4 (2*2), 9 (3*3), 16 (4*4), 25(5*5)

function beeramid(bonus: number, price: number): number {
    if (bonus <= 0 || price <= 0) return 0
    let cans = Math.floor(bonus / price)
    let level = 0
    let square = 0
    let nextSquare = 0
    while (cans >= 1 && cans >= nextSquare) {
        level++
        square = level ** 2
        nextSquare = (level + 1) ** 2
        cans = cans - square
    }
    return level
}

console.log(beeramid(1500, 2)); // should === 12
console.log(beeramid(4, 4)); // should === 1
