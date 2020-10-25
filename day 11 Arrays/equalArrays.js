function equalArrays(arr1, arr2) {
    let sumArr1 = 0;
    let numArr1 = 0;
    let isDiff = true;


    for (let k = 0; k < arr1.length; k++) {
        numArr1 = Number(arr1[k])
        sumArr1 += numArr1
        if (arr1[k] !== arr2[k]) {
            console.log(`Arrays are not identical. Found difference at ${k} index`);
            isDiff = false
            break;
        }
    }
    if (isDiff === true) {
        console.log(`Arrays are identical. Sum: ${sumArr1}`)
    }
}
equalArrays(['10', '20', '30'], ['10', '20', '30'])