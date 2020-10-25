function magicMatrices(arr) {
    let sum = 0;
    let sum2 = 0;
    let sum3 = 0;
    for (let i = 0; i < arr.length; i++) {
        let arr2 = arr[i]
        for (let j = 0; j < arr2.length; j++) {
            if (j === 0) {
                sum += arr2[j]
            } else if (j === 1) {
                sum2 += arr2[j]
            } else if (j === 2) {
                sum3 += arr2[j]
            }


        }
    }
    if (sum === sum2 && sum2 === sum3) {
        console.log('true');

    } else {
        console.log('false');

    }
}
magicMatrices([
    [4, 5, 6],
    [6, 4, 4],
    [5, 6, 5]
])