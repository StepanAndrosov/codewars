function fibonacci(index: number) {
    let arr = [] as number[]
    for (let i = 0; i <= index; i++) {
        arr.push(i)
    }
    if (index > 2) arr.pop()
    arr.map((f, i) =>
        i !== 0 && i !== 1 ? (arr[i] = arr[i - 1] + arr[i - 2]) : f
    )
    return arr
}

let counter = 0

function fibonacci2(index: number): number {
    counter++
    console.log(counter, index)
    if (index === 1) return 0
    if (index === 2) return 1
    else return fibonacci2(index - 1) + fibonacci2(index - 2)
}

console.log(fibonacci2(13))

// test(fibonacci(1), 0) 0, 1
// test(fibonacci(2), 1) 0, 1, 1
// test(fibonacci(13), 144) 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
