function equalNeighbors(arr) {
    let neighbors = 0;
    for (let row = 0; row < arr.length; row++) {

        for (let col = 0; col < arr[row].length; col++) {

            if (row + 1 < arr.length) {
                if ((arr[row][col]) === (arr[row + 1][col])) {
                    neighbors++;
                }

            }

            if ((arr[row][col]) === (arr[row][col + 1])) {
                neighbors++
            }
        }
    }
    console.log(neighbors);
}
equalNeighbors([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not',
        'done',
        'yet',
        '5'
    ]
])