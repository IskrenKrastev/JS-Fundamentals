function buildWall(arr) {

    let dailyConcrete = [];
    let sumConcrete = 0;

    function target() {
        let sum = 0;
        for (let num of arr) {
            sum += num;
        }
        return sum;
    }

    while (target() < Number(arr.length) * 30) {
        let daily = 0;

        for (let j = 0; j < arr.length; j++) {
            let currentCrew = arr[j];

            if (currentCrew < 30) {
                daily++;
                currentCrew++;
                arr.splice(j, 1, currentCrew)
            }
        }
        daily *= 195;
        dailyConcrete.push(daily);
        sumConcrete += daily;
    }
    console.log(dailyConcrete.join(', '));
    console.log(sumConcrete * 1900 + ' pesos')
}
buildWall([17, 22, 17, 19, 17])