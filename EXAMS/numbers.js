function numbers(input) {

    let nums = input.split(' ').map(x => Number(x));
    let sum = 0;
    nums.forEach(num => {
        sum += num;
    });
    let averageSum = sum / nums.length;

    let topNums = []
    nums.forEach(num => {
        if (num > averageSum) {
            topNums.push(num);
        }
    });

    if (topNums.length === 0) {
        console.log(`No`);
    } else {
        let sortedNums = topNums.sort((a, b) => {
            return b - a;
        });
        sortedNums = sortedNums.slice(0, 5)
        console.log(sortedNums.join(' '));
    }
}
//numbers('10 20 30 40 50');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbers('1');
numbers('-1 -2 -3 -4 -5 -6');