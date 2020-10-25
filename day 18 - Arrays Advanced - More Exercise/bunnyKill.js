function bunnyKill(arr) {

    let currentCells = arr.pop().split(' ').map(str => str.split(',').map(x => Number(x)));
    arr = arr.map(row => row.split(' ').map(x => Number(x)));

    let sum = 0;
    let killCounter = 0;


    for (let i = 0; i < currentCells.length; i++) {
        let bombRow = currentCells[i][0];
        let bombCol = currentCells[i][1];
        let bombValue = arr[bombRow][bombCol];
        killCounter++;

        for (let row = 0; row < arr.length; row++) {

            for (let col = 0; col < arr[row].length; col++) {

                if (bombValue > 0 && bombRow === row && bombCol === col) {

                    let start = Math.max(0, bombCol - 1);
                    let end = Math.min(bombCol + 1, arr[row].length - 1);

                    let minRow = Math.max(0, row - 1);
                    let maxRow = Math.min(arr[row].length, row + 1);

                    for (let j = start; j <= end; j++) {

                        if (minRow < row) {

                            arr[minRow][j] = arr[minRow][j] - bombValue;

                        }




                        arr[row][j] = arr[row][j] - (bombValue);


                        if (maxRow > row) {

                            arr[maxRow][j] = arr[maxRow][j] - (bombValue);

                        }
                    }

                }


            }
        }

        sum += bombValue;
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > 0) {
                sum += arr[i][j];
                killCounter++;
            }


        }
    }

    console.log(sum);
    console.log(killCounter);

}
bunnyKill([
    '5 10 15 20',
    '10 10 10 10',
    '10 15 10 10',
    '10 10 10 10',
    '2,2 0,1'
])