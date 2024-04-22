const arr = [[-1], 1, 2, 3, [4, 5, [6, 7], [8, 9, [10, 11, [12, 13]]]]]

type NestingArray = typeof arr

function flat(array: NestingArray) {
    const arr1 = [] as NestingArray

    function reduceArr(array: NestingArray) {
        array.reduce((acc, val) => {
            if (Array.isArray(val)) {
                reduceArr(val)
            } else {
                if (acc !== 0) arr1.push(acc)
                arr1.push(val)
            }
            return acc
        }, 0)

        return arr1
    }
    reduceArr(array)

    return arr1
}

console.log(flat(arr))
flat([])
flat([[1, 5], 5, 10])
flat([1, 2, [3, 4]])
flat([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]])

//   test(flat([]), []);
//   test(flat([[1, 5], 5, 10]), [1, 5, 5, 10]);
//   test(flat([1, 2, [3, 4]]), [1, 2, 3, 4]);
//   test(flat([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
