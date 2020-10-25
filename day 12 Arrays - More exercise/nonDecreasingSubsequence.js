function nonDecreasingSubsequence(arr) {
    let nonDecArr = [];
    let maxNum = Number.MIN_SAFE_INTEGER
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= maxNum) {
            maxNum = arr[i]
            nonDecArr.push(maxNum)
        }


    }
    console.log(nonDecArr.join(' '));

}
nonDecreasingSubsequence([20, 3, 2, 15, 6, 1])