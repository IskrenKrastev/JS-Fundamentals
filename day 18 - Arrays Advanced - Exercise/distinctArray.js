function distinctArray(arr) {

    //   let removed = arr.filter((a, b) => arr.indexOf(a) === b);
    // return removed.join(' ')


    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = i + 1; j < arr.length; j++) {
    //         if (arr[i] === arr[j]) {
    //             arr.splice(j, 1)
    //         }
    //     }

    // }
    // return arr.join(' ')



    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i])
        }

    }
    return result.join(' ')
}
console.log(distinctArray([20, 8, 12, 13, 4,
    4, 8, 5
]));