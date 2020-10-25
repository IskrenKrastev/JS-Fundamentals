function diagonalAttack(arr) {
    let diagonal = []
    let diagonalOne = 0
    let diagonalTwo = 0
    let num = 0
    let noArr = []
    let replaceAll = []
    let replaceOne = []


    for (let i = 0; i < arr.length; i++) {

        arr[i] = arr[i].split(' ')
        noArr.push(arr[i].join(' '))
        diagonalOne += Number(arr[i][num]);
        num++
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        diagonalTwo += Number(arr[i][num - 1])
        num--;
    }

    for (let i = 0; i < arr.length; i++) {
        replaceOne = []

        for (let j = 0; j < arr.length; j++) {
            replaceOne.push(diagonalOne)
        }
        replaceAll.push(replaceOne)
    }

    if (diagonalOne !== diagonalTwo) {
        console.log(noArr.join('\n'));

    } else {

        for (let i = 0; i < replaceAll.length; i++) {

            replaceAll[i].splice(i, 1, arr[i][i])
        }
        for (let i = 0; i < replaceAll.length; i++) {

            replaceAll[i].splice(replaceAll.length - 1 - i, 1, arr[i][arr.length - 1 - i])

        }
        let totalRep = []
        for (let i = 0; i < replaceAll.length; i++) {
            totalRep.push(replaceAll[i].join(' '))

        }

        console.log(totalRep.join('\n'));
    }
}
diagonalAttack([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
])