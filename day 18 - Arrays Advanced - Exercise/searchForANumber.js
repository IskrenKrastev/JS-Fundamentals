function searchForANumber(firstArr, secondArr) {

    let takeFromFirst = secondArr[0];
    let elementsToDel = secondArr[1];
    let requiredNum = secondArr[2];
    let counterFindNum = 0;

    let takedNums = firstArr.slice(0, takeFromFirst)
    takedNums.splice(0, elementsToDel);

    for (let i = 0; i < takedNums.length; i++) {
        if (takedNums[i] === requiredNum) {
            counterFindNum++;
        }
    }
    console.log(`Number ${requiredNum} occurs ${counterFindNum} times.`)

}
searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3])