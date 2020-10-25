function addOrSubstract(numbers) {
    let arr = []
    let sumArr1 = 0;
    let sumArr2 = 0;
    for (let num in numbers) {
        if (numbers[num] % 2 === 0) {
            arr.push(numbers[num] + Number(num))
        } else {
            arr.push(numbers[num] - Number(num))
        }
        sumArr1 += Number(numbers[num])
    }

    for (let num2 of arr) {
        sumArr2 += num2
    }
    console.log(arr);
    console.log(sumArr1);
    console.log(sumArr2);
}
addOrSubstract([5, 15, 23, 56, 35])