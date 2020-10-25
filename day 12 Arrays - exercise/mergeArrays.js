function mergeArrays(arr1, arr2) {
    let thirdArray = []
    for (let index in arr1) {
        if (index === 0 || index % 2 === 0) {
            thirdArray.push(Number(arr1[index]) + Number(arr2[index]));
        } else {
            thirdArray.push(arr1[index] + arr2[index])
        }
    }
    console.log(thirdArray.join(' - '));


}
mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11'])